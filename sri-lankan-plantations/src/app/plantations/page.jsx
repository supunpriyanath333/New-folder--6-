import Image from 'next/image';

export default function Plantations() {
  return (
    <div className="plantations-container">
      <h1>Sri Lankan Plantations</h1>
      <p>
      Sri Lanka is a land renowned for its diverse and vibrant plantations, each playing a crucial role in the country’s economy and cultural heritage. The lush landscapes filled with tea, rubber, coconut, and cinnamon plantations not only contribute significantly to agriculture but also represent the rich history and traditions of the island. This page provides an in-depth look at these key plantations that define Sri Lanka's agricultural identity.</p>


      <div className="plantation-section">
      <h2>Tea Plantations</h2>
        <Image
          src="/images/tea.jpg"
          alt="Tea Plantation"
          width={600}
          height={400}
        />
        
        <p>
        Sri Lanka, formerly known as Ceylon, is celebrated for its exceptional tea, often regarded as some of the finest in the world. The island’s unique climate, characterized by high altitudes and rich soil, creates ideal conditions for cultivating a variety of tea. Tea estates flourish in regions like Nuwara Eliya, Kandy, and Uva, each producing distinctive flavors influenced by the local climate and terrain.   </p>
        <p>
          The cultivation of tea in Sri Lanka is not just an agricultural practice; it is deeply embedded in the country’s culture. The labor-intensive process of hand-picking tea leaves ensures high-quality production. Beyond its economic contributions, tea drinking is a cherished social ritual, symbolizing hospitality and community in Sri Lankan households. Visitors to the island often find themselves captivated by the breathtaking vistas of sprawling tea gardens, making it a key attraction for tourists.
        </p></div>

      {/* Rubber Plantation Section */}
      <div className="plantation-section">
      <h2>Rubber Plantations</h2>
        <Image
          src="/images/rubber.jpg"  
          alt="Rubber Plantation"
          width={600}
          height={400}
        />
       
        <p>
        The rubber industry in Sri Lanka has a rich history dating back to the late 19th century when the first rubber trees were introduced to the island. Today, rubber plantations cover extensive areas, especially in the wet zone of the country. The process of tapping rubber trees to collect latex is both an art and a science, requiring skilled labor to ensure the trees remain healthy and productive.
        </p><p>
          Rubber plays a significant role in the economy of Sri Lanka, contributing to both local livelihoods and national exports. The industry provides jobs for thousands of families, particularly in rural areas. However, with the growing awareness of environmental issues, there is an increasing emphasis on sustainable rubber cultivation practices to prevent deforestation and protect biodiversity. This transition is essential for the long-term viability of the rubber industry and the well-being of local communities that depend on it.
        </p></div>

      {/* Coconut Plantation Section */}
      <div className="plantation-section">
      <h2>Coconut Plantations</h2>
        <Image
          src="/images/coconut.jpg"  
          alt="Coconut Plantation"
          width={600}
          height={400}
        />
        
        <p>
        Known as the "tree of life," the coconut palm is integral to the Sri Lankan economy and culture. Coconut plantations are ubiquitous across the coastal regions of the island, providing a wide array of products, from coconut oil to coir (fiber). The cultivation of coconuts is not only an agricultural practice but also a way of life for many Sri Lankans, who utilize the tree's products in various aspects of daily living, from cooking to construction. </p>
        <p>
          Coconuts are celebrated for their nutritional value, being rich in vitamins, minerals, and healthy fats. The versatility of coconuts allows for their use in traditional dishes as well as in the production of cosmetics and household goods. Additionally, coconuts hold cultural significance in Sri Lankan festivals and rituals, symbolizing prosperity and abundance. The importance of sustainable coconut farming practices cannot be overstated, as they ensure the continued health of the coconut industry and the environment.
        </p></div>

      {/* Cinnamon Plantation Section */}
      <div className="plantation-section">
      <h2>Cinnamon Plantations</h2>
        <Image
          src="/images/cinnamon.jpg"  
          alt="Cinnamon Plantation"
          width={600}
          height={400}
        />
        <p>
        Sri Lanka is the world’s leading producer of true cinnamon, known for its aromatic flavor and numerous health benefits. Cinnamon is harvested from the inner bark of the cinnamon tree, and the traditional method of peeling the bark to create quills has been passed down through generations. The meticulous harvesting process contributes to the high quality of Sri Lankan cinnamon, making it highly sought after in global markets.
        </p>
        <p>
          The demand for Sri Lankan cinnamon extends beyond culinary uses; it is also valued for its medicinal properties. Rich in antioxidants and known for its anti-inflammatory effects, cinnamon is utilized in traditional medicine and health products. The cinnamon industry not only boosts the economy but also plays a crucial role in supporting local farmers. Efforts to promote sustainable practices within the cinnamon industry are vital to ensuring its longevity and minimizing environmental impact.
        </p>
      </div>
    </div>
  );
}
