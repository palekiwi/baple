import { graphql } from "gatsby";

export const IndexFragment = graphql`
  fragment IndexFrontmatter on JavascriptFrontmatter {
    frontmatter {
      sections {
        categories {
          heading
          categoryLinks {
            label
            image {
              childImageSharp {
                fluid(maxWidth: 250) {
                  src
                }
              }
            }
            to
          }
        }
        more {
          heading
          logo {
            childImageSharp {
              fluid(maxWidth: 200) {
                src
              }
            }
          }
          image {
            childImageSharp {
              fluid(maxWidth: 1200) {
                src
              }
            }
          }
          link {
            to
            label
          }
        }
        welcome {
          heading
          subheading
          logo {
            childImageSharp {
              fluid(maxWidth: 300) {
                src
              }
            }
          }
          image {
            childImageSharp {
              fluid(maxWidth: 1200) {
                src
              }
            }
          }
        }
      }
    }
  }
`;