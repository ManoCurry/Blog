import React from 'react'
import Link from 'next/link'
import AppLayout from '../components/layouts/AppLayout'

const data = {
  jiseung: ['React', 'Redux', 'TypeScript', 'Chrome', 'Node.js','HelveticaNeue', '찜닭', '日本', '여행', '인도', 'こころざしのぼる', 'MUJI', '울산', '페미니즘', 'CSS', '부암동', 'Design', 'Aerosmith', 'ES6', 'JavaScript', '멬더머니', '아날로그', 'わかりました', 'London', '호불호대마왕', '앙버터치아바타', 'SNPE', '90년대감성', '달달구리', 'Pure', '열반', 'ミニマリズム'],
  junyoung: ['React', 'Redux', '클래식음악', 'Chrome', '히오스', 'Node.js', '앙버터치아바타', 'Electron', 'Markdown', '日本', 'TDD', 'Pure', 'としひで', '야채', '영향력', 'ES6', 'JavaScript', '고기가많이든김치찌개', '따릉이', '멬더머니', '마산', '헬스', 'ミニマリズム']
}

const tags = Array.from(Object.entries(data)
  .reduce((tagMap, [authorName, tags]) => {
    tags.forEach((tag) => {
      if (tagMap.has(tag)) {
        const tagObj = tagMap.get(tag)
        tagObj.common = true
        tagObj.authorName.add(authorName)
      } else {
        tagMap.set(tag, {
          tag,
          authorName: new Set([authorName]),
          common: false
        })
      }
    })

    return tagMap
  }, new Map())
  .values())
  .sort(() => Math.random() - 0.5)

const InfoSpan = ({
  option,
  span
}) => {

  return (
    <span className={`info-span ${option}`}>
      { span }
      <style jsx>{`
        span {
          position: relative;
          display: inline-block;
          padding: 4px 6px;
          margin: 0 8px 8px;
          font-size: 30px;
          font-weight: 700;
          line-height: 1.2;
          cursor: pointer;
        }
        span.uncommon{
          color: white;
          background-color: #1b2125;
        }
        span.uncommon::after {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          background: #1b2125;
        }
        span.uncommon:hover::after {
          background: #1b2125;
          left: 100%;
        }
      `}</style>
    </span>
  )
}

const About = () => (
  <AppLayout>
    <h2 className='section-title'
      lang='en'>
      $ whoami
    </h2>
    <section>
      {
        tags
          .map((item) => <InfoSpan key={item.tag} span={item.tag} option={item.common ? '' : 'uncommon'}/>)
      }
    </section>
    <style jsx>{`
      .author-info {
        padding: 15px;
        border: 10px solid;
        background-color: white;
        font-size: 36px;
        font-weight: bold;
        line-height: 1.2;
      }

      .authors {
        overflow: auto;
      }

      .author-info h4 {
        font-size: 40px;
      }

    `}</style>
  </AppLayout>
)

export default About

