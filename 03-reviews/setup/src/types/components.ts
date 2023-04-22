import {Review} from "./index";

export type ReviewProps = {
  review: Review;
  id: number;
  setId: React.Dispatch<React.SetStateAction<number>>;
};

export type ButtonProps = {
  styles: string;
  svg?: React.ReactElement<React.SVGProps<SVGSVGElement>>;
  children?: string
  onClick: () => void;
};