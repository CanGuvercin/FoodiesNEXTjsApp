export default function MealDetailPage({ params }) {
  const { slug } = params;

  return (
    <div>
      <h1>Meal Detail Page</h1>
      <p>Details for meal: {slug}</p>
    </div>
  );
}