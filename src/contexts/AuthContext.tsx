import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type UserRole = "manager" | "employee" | "guest";

type AuthContextValue = {
  role: UserRole;
  isAuthenticated: boolean;
  setRole: (role: UserRole) => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);
const storageKey = "refund:userRole";

function normalizeRole(value: string | null): UserRole | null {
  if (value === "manager" || value === "employee" || value === "guest") {
    return value;
  }
  return null;
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [role, setRoleState] = useState<UserRole>(() => {
    const storedRole = normalizeRole(localStorage.getItem(storageKey));
    return storedRole ?? "manager";
  });

  const setRole = (nextRole: UserRole) => {
    setRoleState(nextRole);
    localStorage.setItem(storageKey, nextRole);
  };

  const value = useMemo(
    () => ({
      role,
      setRole,
      isAuthenticated: role !== "guest",
    }),
    [role]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}
