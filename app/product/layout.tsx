import Link from "next/link"

export default function layout({ children }: LayoutProps<"/">) {
  
  return (
    <>
    <nav style={{color: 'white', backgroundColor:'orange', display:'flex', justifyContent:'space-between', alignItems:'center', padding: '20px'}}>
        <h1 >ProductNav</h1>
        <Link className="bg-black rounded-2xl p-3" href="/product/productdescription"><button>description</button></Link>
        <Link className="bg-black rounded-2xl p-3" href="/product/productdetails"><button>details</button></Link>
        <Link className="bg-black rounded-2xl p-3" href="/productimage"><button>Image</button></Link>
    </nav>
        
            <main>{ children }</main>
    


        


    
    </>
  )
}