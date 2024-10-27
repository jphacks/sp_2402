import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

// コンテキストの型定義
interface ContextProps {
  userID: string | null;
  setUserID: Dispatch<SetStateAction<string | null>>;
}

// 初期値を定義
export const Context = createContext<ContextProps>({
  userID: null,
  setUserID: () => {} // ダミー関数を設定
});

// Provider のプロパティの型定義
interface ProviderProps {
  children: ReactNode;
}

export const Provider: React.FC<ProviderProps> = ({ children }) => {
  const [userID, setUserID] = useState<string | null>(localStorage.getItem('userID'));

  return (
    // グローバル変数を宣言
    <Context.Provider value={{ userID, setUserID }}>
      {children}
    </Context.Provider>
  );
};
