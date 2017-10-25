import React from 'react'
import Link from 'next/link'
import Sidebar from '../components/Sidebar'
import AppLayout from '../components/layouts/AppLayout'
import SectionLayout from '../components/layouts/SectionLayout'

const data = {
  jiseung: ['React', 'Redux', 'TypeScript', 'Chrome', 'Node.js','HelveticaNeue', '찜닭', '日本', '여행', '인도', 'こころざしのぼる', 'MUJI', '울산', '페미니즘', 'CSS', '부암동', 'Design', 'Aerosmith', 'ES6', 'JavaScript', '멬더머니', '아날로그', 'わかりました', 'London', '호불호대마왕', '앙버터치아바타', 'SNPE', '90년대감성', '달달구리', 'Pure', '열반'],
  junyoung: ['React', 'Redux', '클래식음악', 'Chrome', '히오스', 'Node.js', '앙버터치아바타', 'Electron', 'Markdown', '日本', 'TDD', 'Pure', 'としひで', '야채', '영향력', 'ES6', 'JavaScript', '고기가많이든김치찌개', '따릉이', '멬더머니', '마산', '헬스']
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



// const dataJiseung = ['React', 'Redux', 'TypeScript', 'Node.js','HelveticaNeue', '찜닭', '日本', '여행', '인도', 'こころざしのぼる', 'MUJI', '페미니즘', 'CSS', '부암동', 'Design', 'Aerosmith', 'ES6', 'JavaScript', '멬더머니', '아날로그']
// const dataJunyoung = ['React', 'Redux', '히오스', 'Node.js', 'Electron', 'Markdown', '日本', 'TDD', 'としひで', 'ES6', 'JavaScript', '고기가많이든김치찌개', '멬더머니']

// // 어차피 하나로 뭉쳐서 뿌릴건데 왜 두개로 나눠서 관리하나? 똥멍청이야?
// // 어 그러네요?

// const data = {
//   jiseung: ['React', 'Redux', 'TypeScript', 'Node.js','HelveticaNeue', '찜닭', '日本', '여행', '인도', 'こころざしのぼる', 'MUJI', '페미니즘', 'CSS', '부암동', 'Design', 'Aerosmith', 'ES6', 'JavaScript', '멬더머니', '아날로그'],
//   junyoung: ['React', 'Redux', '히오스', 'Node.js', 'Electron', 'Markdown', '日本', 'TDD', 'としひで', 'ES6', 'JavaScript', '고기가많이든김치찌개', '멬더머니']
// }

// // Object.entries를 하면 [key, value] 꼴로 배열이 나올거야
// // [name: tags]
// // 하나의 데이터로 합쳐서 이걸 가지고 돌리고 돌리고
// // 하나로 만들때는 믿고 쓰는 reduce


// // new Map()
// // - 모든 키/밸류값이 iterable하다 -> nono object는 defineProperty에서 iterable: false 설정
// // - key랑 value를 한번 넣었으면 그걸 다시 꺼내기싫고, 그렇게 관리하는 데이터베이스가 맵
// 배열 -> react component 반복돌릴때편함
// [{ react: {
//   tag: react,
//   common: true,
//   authorName: ['jiseung', 'junyoung']
//   }
// // }]
// const authorInfo = Object.entries(data)
// .reduce((acc, [authorName, tags]) => {
//   tags.forEach(tag, index => {
//     if(acc.has(tag)) {
//       const tagData = acc.get(tag)
//       tagData.common = true
//       tagData.authorName.add(authorName)
//       acc[tag] = {
//         tag,
//         authorName: authorName.push(tag),
//         common: true
//       }
//     } else {
//       acc.set(tag, {
//         tag,
//         authorName: new Set([authorName]),
//         common: false
//       })
//     }
//   })
//   return acc
// }, new Map())
// .values()


// // Map => key에 따라 값의 형태가 다 같다
// // Object => key 값에 따라 값의 형태가 다르다 (값을 봐라: common, authorName은 값의 형태가 다르다)

// // Set은 중복될 필요가 없는 어레이
