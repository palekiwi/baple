import { graphql } from "gatsby";

export const AboutFragment = graphql`
  fragment AboutFrontmatter on JavascriptFrontmatter {
    fields {
      domain
    }
    frontmatter {
      sections {
        about1 {
          logo {
            childImageSharp {
              fluid(quality: 90, maxWidth: 400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          image {
            childImageSharp {
              fluid(quality: 90, maxWidth: 1400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          heading
          body
        }
        about2 {
          image {
            childImageSharp {
              fluid(quality: 90, maxWidth: 1400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          body
        }
        advantages {
          heading
          body
          points
        }
        tcs {
          heading
          image {
            childImageSharp {
              fluid(quality: 90, maxWidth: 1400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        qas {
          heading
          image {
            childImageSharp {
              fluid(quality: 90, maxWidth: 1400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
