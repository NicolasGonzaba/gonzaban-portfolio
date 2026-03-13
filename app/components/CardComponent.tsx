import React from 'react'
import { Button, Card } from "flowbite-react";
interface CardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}




const CardComponent = ({ title, description, image, link }: CardProps) => {

  return (
    <Card
      className="max-w-sm"
      imgAlt="Project Image"
      imgSrc={image}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {description}
      </p>
      <Button >
        {/* Read more
      
        <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path 
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg> */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 text-White text-center rounded-lg hover:bg-gray-200 transition"

        >
          View Project
        </a>

      </Button>

    </Card>
  )
}

export default CardComponent