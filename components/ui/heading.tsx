import { Col } from "./col";
import { Row } from "./row";

interface HeadingProps {
    title: string;
    description: string;
  }
  
  export const Heading: React.FC<HeadingProps> = ({
    title,
    description
  }) => {
    return ( 
      <Col classPlus="w-full gap-2">
        <h2 className="text-3xl font-bold tracking-tight capitalize">{title}</h2>
        <p className="text-sm text-gray-500">
          {description}
        </p>
        <hr />
      </Col>
    );
  };
   