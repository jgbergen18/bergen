import { useState } from 'react';

const galleryItems = [
  {
    id: 1,
    title: "Moment One",
    description: "A beautiful moment captured in time, showcasing the intersection of light and shadow in everyday life.",
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=600&fit=crop"
  },
  {
    id: 2,
    title: "Creative Process",
    description: "Behind the scenes of creative work - where ideas come to life through dedication and passion.",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop"
  },
  {
    id: 3,
    title: "Nature's Geometry", 
    description: "Exploring the mathematical beauty found in natural forms and organic structures.",
    imageUrl: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=500&h=600&fit=crop"
  },
  {
    id: 4,
    title: "Urban Perspectives",
    description: "Finding unique angles and perspectives in the modern urban landscape around us.",
    imageUrl: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&h=600&fit=crop"
  },
  {
    id: 5,
    title: "Texture Study",
    description: "An exploration of texture, material, and the tactile qualities that define our physical world.",
    imageUrl: "https://images.unsplash.com/photo-1493612276216-ee3925520721?w=500&h=600&fit=crop"
  },
  {
    id: 6,
    title: "Light & Form",
    description: "How light shapes our perception of form and creates depth in both digital and physical spaces.",
    imageUrl: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=500&h=600&fit=crop"
  }
];

const ImageGallery = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-16 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-medium text-text-primary mb-12">
          Gallery
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="relative group cursor-pointer overflow-hidden rounded-lg bg-background border border-border-subtle hover:border-border transition-all duration-300"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Image */}
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              {/* Hover Overlay */}
              <div 
                className={`absolute inset-0 bg-black/60 flex items-end transition-opacity duration-300 ${
                  hoveredItem === item.id ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="p-6 text-white space-y-2 animate-fade-in">
                  <h3 className="text-lg font-medium">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/90 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;