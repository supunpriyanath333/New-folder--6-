import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to Sri Lankan Plantations</h1>
      <p className="intro-text">
        Discover the rich history and beauty of plantations in Sri Lanka, including tea, rubber, coconut, and cinnamon. 
        Our website aims to educate visitors about these vital sectors of the Sri Lankan economy and culture.
      </p>


      <div className="image-section">
        <Image
          src="/images/plantation.jpg" 
          alt="Sri Lankan Plantation"
          width={600}
          height={400}
        />
      </div>

      
      <h2>About Our Website</h2>
      <p className="about-text">
        This platform serves as a comprehensive resource for anyone interested in learning more about the various plantations
        that thrive in Sri Lanka. We provide insights into the history, cultivation practices, and economic significance of
        key plantations such as tea, rubber, coconut, and cinnamon. Our goal is to highlight the unique characteristics of 
        these crops and their impact on local communities and the environment.
      </p>
      <p className="about-text">
        Through engaging articles, images, and interactive content, we aim to foster a deeper understanding of the agricultural 
        landscape of Sri Lanka. Whether you are a student, researcher, or simply an enthusiast, our website is designed to provide
        valuable information and promote sustainable practices within the plantation sector.
      </p>

      
      <h2>Get Involved</h2>
      <p className="get-involved-text">
        We invite everyone—researchers, tourists, and locals—to engage with our content and become part of the conversation surrounding
        Sri Lankan plantations. Here are a few ways you can get involved:
      </p>
    </div>
  );
}
