import food from "../assets/food.svg";
import others from "../assets/others.svg";
import service from "../assets/services.svg";
import transport from "../assets/transport.svg";
import accomodation from "../assets/accommodation.svg";

export const CATEGORIES = {
  food: {
    name: "Alimentação",
    icon: food,
  },
  others: {
    name: "Outros",
    icon: others,
  },
  service: {
    name: "Servicos",
    icon: service,
  },
  transport: {
    name: "Transporte",
    icon: transport,
  },
  accomodation: {
    name: "Hospedagem",
    icon: accomodation,
  },
};

export const CATEGORIES_KEYS = Object.keys(CATEGORIES) as Array<
  keyof typeof CATEGORIES
>;
