import Image from "next/image";

export default function notFound() {
 return (
   <div className="flex flex-col items-center justify-center h-screen">
     <Image
       src="/page-not-found.webp"
       alt="404"
       width='1000'
       height={300}
     />
     <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
     <p className="text-lg text-gray-600">Sorry, the page you are looking for does not exist.</p>
   </div>
 )
}