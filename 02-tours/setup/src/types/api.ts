export type Tour = {
  id: string;
  image: string;
  info: string;
  name: string;
  price: string;
};

export type ToursProps = {
  tours: Tour[]
  setTours: React.Dispatch<React.SetStateAction<Tour[]>>

};

