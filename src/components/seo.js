/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function Seo({ description, lang, meta, title }) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

Seo.defaultProps = {
  lang: `en-AU`,
  meta: [
    "Sri Lanka AI",
    "Artificial Intelligence Sri Lanka",
    "Innovative AI solutions",
    "AI company Sri Lanka",
    "Machine Learning Sri Lanka",
    "Sri Lankan tech company",
    "AI innovation",
    "AI startups Sri Lanka",
    "Data science Sri Lanka",
    "AI software solutions",
    "AI research Sri Lanka",
    "Sri Lanka technology innovation",
    "AI-powered solutions",
    "Sri Lankan AI development",
    "Deep learning Sri Lanka",
    "AI-driven technology",
    "AI consulting Sri Lanka",
    "Smart solutions Sri Lanka",
    "AI applications Sri Lanka",
    "AI automation solutions"
],
  description: `Intellisr Pvt. Ltd. empowers businesses with innovative, tailor-made AI solutions to drive efficiency, growth, and long-term success. Our approach combines cutting-edge technology with deep industry insights, ensuring that every tool and concept aligns perfectly with your unique needs.`,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: [
    "Sri Lanka AI",
    "Artificial Intelligence Sri Lanka",
    "Innovative AI solutions",
    "AI company Sri Lanka",
    "Machine Learning Sri Lanka",
    "Sri Lankan tech company",
    "AI innovation",
    "AI startups Sri Lanka",
    "Data science Sri Lanka",
    "AI software solutions",
    "AI research Sri Lanka",
    "Sri Lanka technology innovation",
    "AI-powered solutions",
    "Sri Lankan AI development",
    "Deep learning Sri Lanka",
    "AI-driven technology",
    "AI consulting Sri Lanka",
    "Smart solutions Sri Lanka",
    "AI applications Sri Lanka",
    "AI automation solutions"
],
  title: 'Intellisr Pvt. Ltd. empowers businesses with innovative, tailor-made AI solutions to drive efficiency, growth, and long-term success. Our approach combines cutting-edge technology with deep industry insights, ensuring that every tool and concept aligns perfectly with your unique needs.',
}

export default Seo
