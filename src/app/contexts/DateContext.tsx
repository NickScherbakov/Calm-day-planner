import React, { createContext, useContext, useState, ReactNode } from 'react';

interface DateContextType {
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
  navigateToMonth: (year: number, month: number) => void;
  navigateToDay: (year: number, month: number, day: number) => void;
}

const DateContext = createContext<DateContextType | undefined>(undefined);

export function DateProvider({ children }: { children: ReactNode }) {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const navigateToMonth = (year: number, month: number) => {
    const newDate = new Date(year, month, 1);
    setSelectedDate(newDate);
  };

  const navigateToDay = (year: number, month: number, day: number) => {
    const newDate = new Date(year, month, day);
    setSelectedDate(newDate);
  };

  return (
    <DateContext.Provider value={{ selectedDate, setSelectedDate, navigateToMonth, navigateToDay }}>
      {children}
    </DateContext.Provider>
  );
}

export function useDateContext() {
  const context = useContext(DateContext);
  if (!context) {
    throw new Error('useDateContext must be used within DateProvider');
  }
  return context;
}
