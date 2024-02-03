import React from 'react';
import HireData from "../utlity/Additional/HireData";

let Card= ({ title, imageUrl, details, charcterName, charcterUniversity, CharcterCollageName, Skills, DomainName, CompanyName, id, Role, DomainExplore }) => {
  
  return (
    <div className="mb-4 p-4 bg-gray-100 hover:bg-gray-200 rounded-lg md:w-full lg:w-1/3">
      <div className='text-center text-3xl mb-2'>{title}</div>
      <div>
        <img className="w-full h-40 object-cover mb-2 rounded-3xl" src={imageUrl} alt={`Image for ${title}`} />
      </div>
      <div>
        {id === 1 ? (
          <ul>
            <li className='flex '>
              <span>Name:</span>
              <h4 className='font-bold'>{charcterName ? charcterName : ""}</h4>
            </li>
            <li className='flex'>
              <span>University:</span>
              <h4 className='font-bold'>{charcterUniversity ? charcterUniversity : ""}</h4>
            </li>
            <li className='flex'>
              <span>CollageName:</span>
              <h4 className='font-bold'>{CharcterCollageName ? CharcterCollageName : ""}</h4>
            </li>
            <p className="text-gray-800 text-base">{details}</p>
          </ul>
        ) : id === 2 ? (
          <ul>
            <li className='flex '>
              <span className='font-bold'>Skill:</span>
              <div className='uppercase'>{Skills?.map((Data) => (Data + ","))}</div>
            </li>
            <li className='flex'>
              <p className="text-gray-800 text-base">{details}</p>
            </li>
          </ul>
        ) : (id === 3 || id === 4) ? (
          <ul>
            <li className='flex'>
              <span>Domain:</span>
              <h4 className='font-bold'>{DomainName ? DomainName : ""}</h4>
            </li>
            <li className='flex'>
              <span>Company:</span>
              <h4 className='font-bold'>{CompanyName ? CompanyName : ""}</h4>
            </li>
            <li className='flex '>
              <span className='font-bold'>techUsed:</span>
              <div className='uppercase'>{Skills?.map((Data) => (Data + ","))}</div>
            </li>
            <li className='flex'>
              <span>Role:</span>
              <h4 className='font-bold'>{Role ? Role : ""}</h4>
            </li>
            <li className='flex'>
              <p className="text-gray-800 text-base">{details}</p>
            </li>
          </ul>
        ) : id === 5 ? (
          <ul>
            <li className='flex'>
              <span>Domain:</span>
              <h4 className='font-bold'>{DomainExplore ? DomainExplore : ""}</h4>
            </li>
            <li className='flex '>
              <span className='font-bold'>techUsed:</span>
              <div className='uppercase'>{Skills?.map((Data) => (Data + ","))}</div>
            </li>
            <li className='flex'>
              <p className="text-gray-800 text-base">{details}</p>
            </li>
          </ul>
        ) : null}
      </div>
    </div>
  );
};

const  AboutUs =() => {
  let NewData = HireData.map((Data) => { return Data.Cards; });

  return (
    <div className="m-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
      {NewData.map((data) => (
        <Card
          key={data.id}
          id={data?.id}
          title={data?.name}
          charcterName={data?.SelfName}
          charcterUniversity={data?.University}
          CharcterCollageName={data?.CollageName}
          CharcterIntern={data?.C}
          imageUrl={data?.Links}
          details={data?.desc}
          Skills={data?.containt}
          DomainName={data?.Domain}
          CompanyName={data?.CompanyName}
          Role={data?.Role}
          DomainExplore={data?.DomainExplore}
        />
      ))}
    </div>
  );
};

export default  AboutUs;
