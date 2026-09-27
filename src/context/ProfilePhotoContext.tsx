import React, { createContext, useContext, useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';

interface ProfilePhotoContextType {
  photoUrl: string;
  isCustomPhoto: boolean;
  setPhotoFromFile: (file: File) => Promise<void>;
  resetToDefaultPhoto: () => void;
}

const ProfilePhotoContext = createContext<ProfilePhotoContextType>({
  photoUrl: personalInfo.portraitImage,
  isCustomPhoto: false,
  setPhotoFromFile: async () => {},
  resetToDefaultPhoto: () => {},
});

const STORAGE_KEY = 'yogish_portfolio_profile_photo';

export const ProfilePhotoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [photoUrl, setPhotoUrl] = useState<string>(personalInfo.portraitImage);
  const [isCustomPhoto, setIsCustomPhoto] = useState<boolean>(false);

  useEffect(() => {
    try {
      const savedPhoto = localStorage.getItem(STORAGE_KEY);
      if (savedPhoto) {
        setPhotoUrl(savedPhoto);
        setIsCustomPhoto(true);
      } else {
        setPhotoUrl(personalInfo.portraitImage);
        setIsCustomPhoto(false);
      }
    } catch {
      // Fallback silently if localStorage is restricted
    }
  }, []);

  const setPhotoFromFile = async (file: File) => {
    return new Promise<void>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        if (result) {
          try {
            localStorage.setItem(STORAGE_KEY, result);
          } catch {
            // Storage quota reached, still keep in memory
          }
          setPhotoUrl(result);
          setIsCustomPhoto(true);
          resolve();
        } else {
          reject(new Error('Failed to read file'));
        }
      };
      reader.onerror = () => reject(new Error('File reading error'));
      reader.readAsDataURL(file);
    });
  };

  const resetToDefaultPhoto = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignore
    }
    setPhotoUrl(personalInfo.portraitImage);
    setIsCustomPhoto(false);
  };

  return (
    <ProfilePhotoContext.Provider
      value={{
        photoUrl,
        isCustomPhoto,
        setPhotoFromFile,
        resetToDefaultPhoto,
      }}
    >
      {children}
    </ProfilePhotoContext.Provider>
  );
};

export const useProfilePhoto = () => useContext(ProfilePhotoContext);
