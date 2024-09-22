export default function BlogPost({ params }) {
    const posts = {
      '1': 'Tea came to be a principal crop in Sri Lanka in the early 1870s. Prior to 1870s Sri Lankas main crop was coffee and no planter showed much interest in tea. The Pioneer of commercial tea cultivation in Sri Lanka was James Taylor who arrived in Ceylon in 1852 to work in “coffee plantations”. In 1869, a leaf disease destroyed the Islands coffee plantations and estate owners looked for alternative crops. The 19 acre Loolecondara Estate where Taylor did the first commercial planting of tea became the model for future development of the tea industry in Sri Lanka. Other planters quickly followed Taylor. From 400 hectares in 1875, the Islands tea extent grew to 120,000 hectares by 1900. Today it covers 200,000 hectares in the highlands and southern low land areas of the country. This pioneer period laid the foundation for the gentle green countryside which is characteristic of the tea growing areas of Sri Lanka today.',
      '2': 'During colonization, Sir Joseph Hooker recommended Sri Lanka to carry out experiments based on rubber tree cultivation. Accordingly, he sent 38 cases full of 1919 rubber seedlings from Kew Gardens to Ceylon. Thus, it can be said that it was Joseph Hooker who introduced rubber plantations in Sri Lanka.',
      '3': 'Coconut cultivation in Sri Lanka is distributed across various regions, with specific areas being more conducive to coconut plant growth. In many districts, including North Western Province, which majorly belongs to the coconut triangle in Sri Lanka, and coastal region areas with well-drained soil that are particularly suitable for coconut palms, the distribution of coconut cultivation is widespread in the country. ',
      '4': 'Sri Lanka is the worlds largest producer and exporter of pure cinnamon to the world and pure Ceylon Cinnamon Suppliers from Sri Lanka claim 90% of global market share.Cinnamon grown and produced in Sri Lanka has acquired long standing reputation in the international market due to its unique quality, colour, flavour and aroma. With growing concerns about health hazards associated with synthetic flavoring agents in the food industry, there is an increasing preference for natural flavours worldwide. Cinnamon is used as a food ingredient in bakery products, Asian foods, and tea for its distinctive flavour and aroma.'
      };
  
    const postContent = posts[params.postId] || 'Post not found';
  
    return (
      <div>
        <h1>Blog Post {params.postId}</h1>
        <p>{postContent}</p>
      </div>
    );
  }
  