import React from 'react'
import moment from "moment"
import Link from "next/link"
import SCStyles from '../styles/SearchCards.module.css'
import { Ellipsis } from 'react-row-ellipsis';


const SearchCards = ({ post }) => {
  return (
      <div className={SCStyles.cardContainer}>
              <a href={`/post/${post.slug}`}>
                  <div >
                      <div >
                          <h2 className={SCStyles.cardTitle}>
                              {post.title}
                          </h2>
                          <div className={SCStyles.cardMetInfo}>
                              {post.categories.map((category) => (
                                      <a key={category.slug} href={`/category/${category.slug}`}>
                                        <p className={SCStyles.category}>
                                              {category.name}
                                          </p>
                                      </a>
                              ))}
                            <p className={SCStyles.date}>{moment(post.createdAt).format('DD MMM, YYYY')}</p>
                          </div>

                        <Ellipsis lines={3} as='p' className={SCStyles.cardExcerpt}>
                              {post.excerpt}
                        </Ellipsis>
                      </div>
                     
                  </div>
              </a>
          {/* </Link> */}
      </div>
  )
}

export default SearchCards