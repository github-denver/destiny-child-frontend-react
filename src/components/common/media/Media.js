import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Styled = {}

Styled.card = styled.div``

const Card = (props) => {
  const { category, list, pagination, error, loading } = props

  if (error) {
    if (error.response && error.response.status === 404) {
      console.group('components → common → media → [Media.js]')
      console.log('존재하지 않는 데이터입니다.')
      console.groupEnd()

      return <p>존재하지 않는 데이터입니다.</p>
    }

    console.group('components → common → media → [Media.js]')
    console.log('에러가 발생했어요!')
    console.groupEnd()

    return <p>에러가 발생했어요!</p>
  }

  if (loading || !list) {
    console.group('components → common → media → [Media.js]')
    console.log('읽어들이는 중이거나 아직 데이터가 존재하지 않습니다.')
    console.groupEnd()

    return <p>읽어들이는 중이거나 아직 데이터가 존재하지 않습니다.</p>
  }

  if (!list) {
    console.group('components → common → media → [Media.js]')
    console.log('목록이 존재하지 않습니다.')
    console.groupEnd()

    return <p>목록이 존재하지 않습니다.</p>
  }

  return (
    <>
      <div className="group_media group_triple">
        <div className="inner_triple first">
          <Link to={{ pathname: `https://www.youtube.com/watch?v=${list[4].address}` }} target="_blank" className="link_media">
            <img src={`http://localhost:4000/uploads/${list[4].thumbnail}`} alt="" className="thumbnail_media" />
            <span className="outer_cell">
              <span className="inner_cell">
                <span className="text_media">{list[4].subject}</span>
              </span>
            </span>
            <span className="dummy"></span>
          </Link>

          <Link to={{ pathname: `https://www.youtube.com/watch?v=${list[3].address}` }} target="_blank" className="link_media">
            <img src={`http://localhost:4000/uploads/${list[3].thumbnail}`} alt="" className="thumbnail_media" />
            <span className="outer_cell">
              <span className="inner_cell">
                <span className="text_media">{list[3].subject}</span>
              </span>
            </span>
            <span className="dummy"></span>
          </Link>
        </div>

        <div className="inner_triple">
          <Link to={{ pathname: `https://www.youtube.com/watch?v=${list[2].address}` }} target="_blank" className="link_media">
            <img src={`http://localhost:4000/uploads/${list[2].thumbnail}`} alt="" className="thumbnail_media" />
            <span className="outer_cell">
              <span className="inner_cell">
                <span className="text_media">{list[2].subject}</span>
              </span>
            </span>
            <span className="dummy"></span>
          </Link>
        </div>

        <div className="inner_triple last">
          <Link to={{ pathname: `https://www.youtube.com/watch?v=${list[1].address}` }} target="_blank" className="link_media">
            <img src={`http://localhost:4000/uploads/${list[1].thumbnail}`} alt="" className="thumbnail_media" />
            <span className="outer_cell">
              <span className="inner_cell">
                <span className="text_media">{list[1].subject}</span>
              </span>
            </span>
            <span className="dummy"></span>
          </Link>

          <Link to={{ pathname: `https://www.youtube.com/watch?v=${list[0].address}` }} target="_blank" className="link_media">
            <img src={`http://localhost:4000/uploads/${list[0].thumbnail}`} alt="" className="thumbnail_media" />
            <span className="outer_cell">
              <span className="inner_cell">
                <span className="text_media">{list[0].subject}</span>
              </span>
            </span>
            <span className="dummy"></span>
          </Link>
        </div>
      </div>
    </>
  )
}

export default React.memo(Card)
