import React from 'react';
import Image from 'next/image';

const FilterPage = () => {
  return (
    <div
      style={{
        width: '100%', // Container ki width 100% rakhi gayi hai
        fontFamily: 'Poppins, sans-serif', // Font family Poppins set ki gayi hai
        overflow: 'hidden', // Overflow ko hidden rakha gaya hai taake kuch bhi container ke bahar na jaye
        marginTop: '0', // Top margin ko 0 set kiya gaya hai taake container page ke upar aaye
        paddingTop: '50px', // Thoda padding upar add kiya gaya hai taake container ko space mile
      }}
    >
      {/* Vase ka main container */}
      <div
        style={{
          width: '100%', // Container ki width 100% rakhi gayi hai
          display: 'flex', // Flexbox layout use kiya gaya hai
          justifyContent:"space-around", // Space between elements ko evenly distribute karne ke liye
          alignItems: 'center', // Items ko vertically center karne ke liye
          padding: '20px', // Padding define ki gayi hai taake elements ke aas-paas space ho
          backgroundColor: '#FAF4F4', // Background color light grey rakha gaya hai
          border: '2px solid #9F9F9F', // Border define kiya gaya hai
           // Position ko relative rakha gaya hai
          marginTop: '90px', // Top margin ko 20px set kiya gaya hai taake container page ke upar na chala jaye
        }}
      >
        {/* Left Side: Arrow Icon */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Image
            src="/Vector (4).png" // Arrow icon ka path
            alt="Arrow Icon" // Alt text
            width={25} // Image ki width 25px
            height={25} // Image ki height 25px
            style={{ padding: '4px' }} // Image ke aas-paas padding
          
          />
        </div>

        {/* Center Text: Filter */}
        <div style={{ fontSize: '20px', fontWeight: '400', color: '#000', padding: '0 10px' }}>
          Filter
        </div>

        
        <div>
          <Image
            src="/dodt.png" // Grid icon ka path
            alt="Grid Icon" // Alt text
            width={28} // Image ki width 28px
            height={28} // Image ki height 28px
            style={{ padding: '5px' }} // Image ke aas-paas padding
          />
        </div>

        {/* List Icon */}
        <div>
          <Image
            src="/line.png" // List icon ka path
            alt="List Icon" // Alt text
            width={24} // Image ki width 24px
            height={24} // Image ki height 24px
            style={{ padding: '3px' }} // Padding around the image
          />
        </div>

        {/* Vertical Line Divider */}
        <div
          style={{
            width: '37px', // Line ka width 37px rakha gaya hai
            height: '2px', // Line ka height 2px rakha gaya hai
            transform: 'rotate(-90deg)', // Line ko rotate kar ke vertical position mein rakha gaya hai
            background: '#9F9F9F', // Line ka color grey rakha gaya hai
          }}
        ></div>

        {/* Showing Results Text */}
        <div
          style={{
            fontSize: '16px', // Text ka font size 16px rakha gaya hai
            color: '#000', // Text ka color black rakha gaya hai
            padding: '0 10px', // Text ke aas-paas padding add ki gayi hai
          }}
        >
          Showing 1–16 of 32 results
        </div>

        {/* Show and Short By Sections */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div
            style={{
              fontSize: '20px', // Text ka font size 20px
              color: '#000', // Text ka color black
              padding: '0 10px', // Padding around the text
            }}
          >
            Show
          </div>
          <div
            style={{
              fontSize: '20px', // Text ka font size 20px
              color: '#9F9F9F', // Text ka color grey rakha gaya hai
              padding: '0 10px', // Padding around the text
              backgroundColor: '#FFFFFF', // Background color white rakha gaya hai
            }}
          >
            16
          </div>
        </div>

        {/* Short By Section */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div
            style={{
              fontSize: '20px', // Text ka font size 20px
              color: '#000', // Text ka color black
              padding: '0 10px', // Padding around the text
            }}
          >
            Short by
          </div>
          <div
            style={{
              fontSize: '20px', // Text ka font size 20px
              color: '#9F9F9F', // Text ka color grey rakha gaya hai
              padding: '0 10px', // Padding around the text
              backgroundColor: '#FFFFFF', // Background color white rakha gaya hai
            }}
          >
            Default
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterPage;
