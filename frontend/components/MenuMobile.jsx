import Link from 'next/link';
import React from 'react';
import { BsChevronDown } from "react-icons/bs";


const data = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "Par Mums", url: "/about" },
  { id: 3, name: "Kateogrijas", subMenu: true },
  { id: 4, name: "Kontakti", url: "/contact" },
  { id: 5, name: "Ielogoties", url: "/login" },
  { id: 6, name: "Reģistrējies", url: "/Register" },

];

const subMenuData = [
  { id: 1, name: "Sveces 1", doc_count: 11 },
  { id: 2, name: "Sveces 2", doc_count: 8 },
  { id: 3, name: "Sveces 3", doc_count: 64 },
  { id: 4, name: "Sveces 4", doc_count: 107 },
];

const MenuMobile = ({setShowCatMenu, showCatMenu, setMobileMenu, categories}) => {
  return (
    <ul className='flex flex-col md:hidden font-bold absolute top-[50px] left-0 w-full h-[calc(100vh-50px)]
    bg-white border-t text black '>
      {data.map((item) => {
        return (
          <React.Fragment key={item.id}>
            {!!item?.subMenu ? (
              <li
                className="cursor-pointer py-4 px-5 border-b flex flex-col relative"
                onClick={() => setShowCatMenu(!showCatMenu)}
              >
                <div className='flex justify-between items-center'>
                    {item.name}
                <BsChevronDown size={14} />
                </div>
                

                {showCatMenu && (
                  <ul className="bg-black/[0.05] -mx-5 mt-4 -mb-4">
                    {categories?.map(({attributes: c, id}) => {
                      return (
                        <Link key={id} href={`/category/${c.slug}`} onClick={() => {
                        setShowCatMenu(false)
                        setMobileMenu(false)
                        }}>
                          <li className="py-4 px-8 border-t flex justify-between">
                            {c.Nosaukums}
                            <span className="opacity-50 text-sm">{`(${c.product.data.length})`}</span>
                          </li>
                        </Link>
                      );
                    })}
                  </ul>
                )}
              </li>
            ) : (
              <li className="py-4 px-5 border-b">
                <Link href={item.url} onClick={()=> setMobileMenu(false)}>{item.name}</Link>
              </li>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
};




export default MenuMobile ;