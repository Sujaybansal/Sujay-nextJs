import React from "react";
interface MealsSlugsProps {
  params: { slugs: string };
}
const MealsSlugs = ({ params }: MealsSlugsProps) => {
  return (
    <div>
      <h1>Meals Share Page</h1>
      <p>{params.slugs}</p>
    </div>
  );
};

export default MealsSlugs;
