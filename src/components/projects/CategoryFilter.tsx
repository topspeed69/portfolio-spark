
import { Button } from "@/components/ui/button";

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in">
      {categories.map((category, index) => (
        <Button
          key={category}
          variant={activeCategory === category ? "default" : "outline"}
          onClick={() => onCategoryChange(category)}
          className={`
            ${activeCategory === category
              ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/40 border-none glow-orange"
              : "border border-gray-700/50 text-gray-300 hover:bg-gray-800/60 hover:border-orange-500/50 hover:text-orange-300 hover:shadow-lg hover:shadow-orange-500/20 backdrop-blur-sm bg-gray-900/30"
            } 
            font-normal transition-all duration-300 transform hover:scale-105 rounded-lg px-6 py-2 relative overflow-hidden
            before:absolute before:inset-0 before:bg-gradient-to-r before:from-orange-500/10 before:to-orange-600/10 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300
          `}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <span className="relative z-10">{category}</span>
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilter;
