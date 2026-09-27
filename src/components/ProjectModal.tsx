import React, { useState } from 'react';
import { Project } from '../types/portfolio';
import { 
  X, 
  ExternalLink, 
  Github, 
  Layers, 
  Check, 
  Database, 
  Code, 
  ShoppingCart, 
  Car, 
  Store, 
  ArrowRight,
  ShieldCheck,
  Cpu
} from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  // Grocery Store simulation state
  const [groceryItems, setGroceryItems] = useState([
    { id: 1, name: 'Fresh Organic Milk (1L)', price: 65, stock: 24, qty: 0 },
    { id: 2, name: 'Whole Wheat Bread', price: 45, stock: 15, qty: 1 },
    { id: 3, name: 'Farm Fresh Eggs (12pk)', price: 90, stock: 40, qty: 1 },
    { id: 4, name: 'Basmati Rice (5kg)', price: 420, stock: 12, qty: 0 },
  ]);

  // Food delivery simulation state
  const foodMenu = [
    { name: 'Paneer Butter Masala', price: 240 },
    { name: 'Garlic Naan (2 pcs)', price: 70 },
    { name: 'Biryani Bowl', price: 280 },
    { name: 'Gulab Jamun (2 pcs)', price: 90 },
  ];
  const [cartItems, setCartItems] = useState<string[]>(['Paneer Butter Masala', 'Garlic Naan (2 pcs)']);
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Car rental simulation state
  const [selectedCar, setSelectedCar] = useState('Mercedes C-Class Sedan');
  const [rentalDays, setRentalDays] = useState(3);
  const carRates: Record<string, number> = {
    'Mercedes C-Class Sedan': 3500,
    'Mahindra Thar 4x4 SUV': 2800,
    'Tesla Model 3 Electric': 4200,
    'Toyota Fortuner Premium': 3900,
  };

  const calculateGroceryTotal = () => {
    return groceryItems.reduce((acc, item) => acc + item.price * item.qty, 0);
  };

  const calculateFoodTotal = () => {
    return cartItems.reduce((acc, name) => {
      const item = foodMenu.find((f) => f.name === name);
      return acc + (item ? item.price : 0);
    }, 0);
  };

  const handleGroceryQty = (id: number, delta: number) => {
    setGroceryItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newQty = Math.max(0, Math.min(item.stock, item.qty + delta));
          return { ...item, qty: newQty };
        }
        return item;
      })
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0f121e] border border-white/[0.12] shadow-2xl p-6 sm:p-8 space-y-6 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header & Close Button */}
        <div className="flex items-start justify-between gap-4 border-b border-white/[0.08] pb-5">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-purple-400 mb-1">
              <span>{project.category}</span>
              <span className="text-slate-600">/</span>
              <span>{project.role}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Project Image Banner */}
        <div className="relative aspect-video sm:aspect-[21/9] w-full rounded-2xl overflow-hidden border border-white/[0.08] bg-slate-900 shadow-md">
          <img
            src={project.image}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f121e] via-transparent to-transparent opacity-80" />
          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-medium text-white bg-black/60 backdrop-blur-md rounded-md border border-white/[0.1]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Detailed Overview */}
        <div className="space-y-3">
          <h4 className="text-base font-semibold text-white flex items-center gap-2">
            <Cpu className="w-4 h-4 text-cyan-400" />
            <span>Project Architecture & Purpose</span>
          </h4>
          <p className="text-slate-300 text-sm leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* 3-Tier Architecture Highlights */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-purple-400 flex items-center gap-2">
            <Layers className="w-4 h-4" />
            <span>Architecture Breakdown</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {project.architecture.map((layer, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs space-y-1"
              >
                <div className="font-semibold text-slate-200">
                  {layer.split(':')[0]}
                </div>
                <div className="text-slate-400 leading-relaxed">
                  {layer.split(':')[1]}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Feature Sandbox depending on project */}
        {project.liveInteractiveType === 'grocery' && (
          <div className="p-5 rounded-2xl bg-black/40 border border-purple-500/20 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                <Store className="w-4 h-4 text-purple-400" />
                <span>Interactive Point-of-Sale & Inventory Simulator</span>
              </div>
              <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                MySQL 3-Tier Simulation
              </span>
            </div>

            <div className="space-y-2">
              {groceryItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.05] text-xs"
                >
                  <div>
                    <span className="font-medium text-slate-200">{item.name}</span>
                    <span className="text-slate-500 ml-2">Stock: {item.stock}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-purple-300">Rs {item.price}</span>
                    <div className="flex items-center gap-1.5 bg-black/40 rounded border border-white/[0.1] px-1">
                      <button
                        onClick={() => handleGroceryQty(item.id, -1)}
                        className="px-1.5 py-0.5 text-slate-400 hover:text-white"
                      >
                        -
                      </button>
                      <span className="font-mono px-1 text-white">{item.qty}</span>
                      <button
                        onClick={() => handleGroceryQty(item.id, 1)}
                        className="px-1.5 py-0.5 text-slate-400 hover:text-white"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-white/[0.08] text-xs">
              <span className="text-slate-400 font-mono">
                SQL: SELECT SUM(price * qty) FROM order_items;
              </span>
              <div className="text-sm font-bold text-white">
                Total Bill: <span className="text-cyan-400">Rs {calculateGroceryTotal()}</span>
              </div>
            </div>
          </div>
        )}

        {project.liveInteractiveType === 'food' && (
          <div className="p-5 rounded-2xl bg-black/40 border border-blue-500/20 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                <ShoppingCart className="w-4 h-4 text-blue-400" />
                <span>Door Delight Order Checkout Engine</span>
              </div>
              <span className="text-[11px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                Responsive Cart Flow
              </span>
            </div>

            <div className="flex flex-wrap gap-2 text-xs">
              {foodMenu.map((dish) => {
                const isSelected = cartItems.includes(dish.name);
                return (
                  <button
                    key={dish.name}
                    onClick={() => {
                      if (isSelected) {
                        setCartItems(cartItems.filter((i) => i !== dish.name));
                      } else {
                        setCartItems([...cartItems, dish.name]);
                      }
                      setOrderPlaced(false);
                    }}
                    className={`px-3 py-1.5 rounded-lg transition-all ${
                      isSelected
                        ? 'bg-blue-600 text-white font-medium shadow-sm'
                        : 'bg-white/[0.04] text-slate-300 hover:bg-white/[0.08]'
                    }`}
                  >
                    {isSelected ? '✓ ' : '+ '} {dish.name}{' '}
                    <span className="font-mono text-[11px] opacity-85 ml-1">(Rs {dish.price})</span>
                  </button>
                );
              })}
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-white/[0.08] text-xs">
              <div className="space-y-0.5">
                <span className="text-slate-400">
                  Selected Items: <strong className="text-white">{cartItems.length}</strong>
                </span>
                <div className="text-xs font-semibold text-white">
                  Total Bill: <span className="text-cyan-400">Rs {calculateFoodTotal()}</span>
                </div>
              </div>
              {orderPlaced ? (
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4" /> Order Confirmed & Stored in DB!
                </span>
              ) : (
                <button
                  onClick={() => setOrderPlaced(true)}
                  disabled={cartItems.length === 0}
                  className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium hover:opacity-95 disabled:opacity-50 transition-opacity cursor-pointer"
                >
                  Place Simulated Order
                </button>
              )}
            </div>
          </div>
        )}

        {project.liveInteractiveType === 'rental' && (
          <div className="p-5 rounded-2xl bg-black/40 border border-cyan-500/20 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                <Car className="w-4 h-4 text-cyan-400" />
                <span>Vehicle Fleet Rate & Availability Calculator</span>
              </div>
              <span className="text-[11px] font-mono text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">
                SQL Query Engine
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="text-slate-400 block mb-1">Select Fleet Model:</label>
                <select
                  value={selectedCar}
                  onChange={(e) => setSelectedCar(e.target.value)}
                  className="w-full bg-[#161a2e] border border-white/[0.1] rounded-lg p-2 text-white font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400"
                >
                  {Object.keys(carRates).map((carName) => (
                    <option key={carName} value={carName}>
                      {carName} (Rs {carRates[carName]}/day)
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-slate-400 block mb-1">
                  Rental Duration: <strong className="text-white">{rentalDays} Days</strong>
                </label>
                <input
                  type="range"
                  min="1"
                  max="14"
                  value={rentalDays}
                  onChange={(e) => setRentalDays(parseInt(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer"
                />
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-white/[0.08] text-xs">
              <span className="text-slate-400 font-mono">
                Rate: Rs {carRates[selectedCar]} × {rentalDays} days
              </span>
              <div className="text-sm font-bold text-white">
                Estimated Total: <span className="text-cyan-400">Rs {carRates[selectedCar] * rentalDays}</span>
              </div>
            </div>
          </div>
        )}

        {/* Key Features Bullet points */}
        <div className="space-y-2">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Key Technical Features
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
            {project.keyFeatures.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Modal Action Footer */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/[0.08]">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] text-xs font-semibold text-white transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>View Source on GitHub</span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </a>

          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-xs font-semibold text-white shadow-md transition-all cursor-pointer"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};
