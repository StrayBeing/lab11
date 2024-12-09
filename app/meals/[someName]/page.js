export function generateStaticParams() {
    const meals = ['burger', 'pizza', 'schnitzel'];
    
    return meals.map((meal) => ({
      someName: meal,
    }));
  }
  
  export default function MealDetailPage({ params }) {
    return (
      <div>
        <h1>Meal: {params.someName}</h1>
        <p>Current URL: /meals/{params.someName}</p>
      </div>
    );
  }
  