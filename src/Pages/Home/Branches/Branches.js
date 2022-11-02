import React from "react";

const Branches = () => {
  return (
    <div className="max-w-screen-xl mx-auto bg-black text-white my-16 rounded-lg text-center py-20">
      <div className="grid gap-3 grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
        <div>
          <p className="text-lg">We are open monday-friday</p>
          <h2 className="text-2xl font-bold">7.00am - 9.00pm</h2>
        </div>
        <div>
          <p className="text-lg">Have a question?</p>
          <h2 className="text-2xl font-bold">+2546 251 2658</h2>
        </div>
        <div>
          <p className="text-lg">Need a repair? Our address</p>
          <h2 className="text-2xl font-bold">Liza Street, New York</h2>
        </div>
      </div>
    </div>
  );
};

export default Branches;
