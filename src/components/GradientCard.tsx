import type React from "react";

interface GradientCardProps {
  children: React.ReactNode;
  className?: string;
  headerContent?: React.ReactNode;
  number?: string | number;
}

const GradientCard: React.FC<GradientCardProps> = ({
  children,
  className = "",
  headerContent,
  number,
}) => {
  return (
    <div className={`rounded-2xl overflow-hidden shadow-lg ${className}`}>
      {(headerContent || number) && (
        <div
          className="px-6 py-8 text-white relative"
          style={{
            background: `linear-gradient(180deg, #6B57FF 0%, rgba(107, 87, 255, 0) 100%)`,
          }}
        >
          {number && (
            <div className="text-4xl font-bold mb-4 opacity-90">{number}</div>
          )}
          {headerContent && (
            <div className="text-lg leading-relaxed">{headerContent}</div>
          )}
        </div>
      )}
      <div className="bg-white">{children}</div>
    </div>
  );
};

export default GradientCard;
