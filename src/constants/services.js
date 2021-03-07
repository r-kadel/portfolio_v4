import React from "react"
import { FaCode, FaSketch, FaWordpress } from "react-icons/fa"
export default [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "development",
    text: `Full Stack Web Development from basic brochure style sites 
            that focus on a few pages to engage your users with a fast loading 
            simple experiece and call to action, to advanced web 
            applications using modern web frameworks, languages and design 
            principles.`,
  },
  {
    id: 2,
    icon: <FaSketch className="service-icon" />,
    title: "design",
    text: `Mobile first accessible designs mean your customers can 
        reach you from any device with any connection at any time. 
        Not sure how to style or theme your site? I can help!`,
  },
  {
    id: 3,
    icon: <FaWordpress className="service-icon" />,
    title: "Administration",
    text: `Own a small business and already have a website? You have enough
            on your plate. I can manage your site, handle any technical issues
            that come up along the way, assist with content and design, 
            and add the features your site needs as your business develops.`,
  },
]
