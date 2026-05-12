import { create } from 'zustand';

interface Crystal {
  id: string;
  name: string;
  size: string;
  quantity: number;
}

interface Plan {
  id: string;
  tier: string;
  crystals: Crystal[];
  totalPrice: number;
  imageUrl: string;
  description: string;
}

interface PlanState {
  plans: Plan[];
  setPlans: (plans: Plan[]) => void;
  selectedPlan: Plan | null;
  setSelectedPlan: (plan: Plan | null) => void;
}

export const usePlanStore = create<PlanState>((set) => ({
  plans: [],
  setPlans: (plans) => set({ plans }),
  selectedPlan: null,
  setSelectedPlan: (plan) => set({ selectedPlan: plan }),
}));