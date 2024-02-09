import { handleOperation } from './index.js';

export const getQuantity = async id => {
  const operation = `
    {
      productVariant(id: "gid://shopify/ProductVariant/${id}") {
        id
        title
        inventoryItem {
          id
          inventoryLevels(first: 5) {
            edges {
              node {
                location {
                  id
                  name
                }
                available
              }
            }
          }
        }
      }
    }
  `;

  return await handleOperation({ operation });
};
