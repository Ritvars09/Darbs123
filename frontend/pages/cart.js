import CartItem from '@/components/CartItem';
import Wrapper from '@/components/Wrapper';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Cart = () => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Grozs
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-12 py-10">
          <div className="flex-[2]">
            <div className="text-lg font-bold">Cart items</div>
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
          <div className="flex-[1] ml-auto">
            <div className="flex flex-col justify-between h-full">
            
              <div className="p-5 my-5 bg-black/[0.05] rounded-xl">
              <div className="text-lg font-bold text-right">Summa</div>
                <div className="flex justify-between">
                  <div className="uppercase text-md md:text-lg font-medium text-black">
                    Subtotal
                  </div>
                  <div className="text-md md:text-lg font-medium text-black">
                    300.00
                  </div>
                </div>
                <div className="text-sm md:text-mdd py-5 mt-5">
                  Patriks treide ir atsalddets semiboldds
                  <br />
                  ssssssssssssssssssssssssssssssssssssssss
                  sssssssssssssssssssssssssssssssssssssssss
                  sssssssssssssssssssssssssssssssssssssssss
                  ssssssssssssssssssssssssssssssssssssssss
                  ssssssssssssssssssssssssssssssssssssssss
                </div>
                <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-[2] flex flex-col items-center pb-[50px] md:-mt-14">
          <Image
            src="/empty-cart.jpg"
            width={300}
            height={300}
            className="w-[300px] mdd:w-[400px]"
          />
          <span className="text-xl font-bold">Tavs grozs ir tukšs</span>
          <span className="text-center mt-4">
            Izskatas ka neko neesi ielicis groza
            <br />
            dodies un apskati kategorijas
          </span>
          <Link
            href="/"
            className="py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8"
          >
            Turpini iepirkties
          </Link>
        </div>
      </Wrapper>
    </div>
  );
};

export default Cart;
