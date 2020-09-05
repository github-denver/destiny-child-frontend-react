import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const $ = window.$

const Styled = {}

Styled.banner = styled.div``

const Banner = (props) => {
  const { banner, error, loading } = props

  useEffect(() => {
    if (!loading && !!banner) {
      const $banner = $('.list_banner')
      const $page = $('.banner_page')
      const indicator = {
        $page: $('.banner_indicator_page'),
        $arrow: $('.banner_indicator_arrow')
      }

      $banner.not('.slick-initialized').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 4000,
        fade: true,
        cssEase: 'cubic-bezier(0.76, 0, 0.24, 1)',
        prevArrow: $page.find('.slick-prev'),
        nextArrow: $page.find('.slick-next')
      })

      $banner.on('beforeChange', (event, slick, currentSlide, prevSlide) => {
        indicator.$page.find('.emph_page').text(prevSlide + 1)
      })

      indicator.$arrow.find('.slick-prev').on('click', () => {
        $banner.slick('slickPrev')
      })

      indicator.$arrow.find('.slick-next').on('click', () => {
        $banner.slick('slickNext')
      })

      return () => {
        if (!loading && !!banner) {
          console.log('components → common → [Banner.js] → useEffect(() => { .. } → return () => { .. }')
          // $banner.slick('unslick')
        }
      }
    }
  }, [banner, loading])

  if (error) {
    if (error.response && error.response.status === 404) {
      console.group('components → common → [Banner.js]')
      console.log('존재하지 않는 데이터입니다.')
      console.groupEnd()

      return <p>존재하지 않는 데이터입니다.</p>
    }

    console.group('components → common → [Banner.js]')
    console.log('에러가 발생했어요!')
    console.groupEnd()

    return <p>에러가 발생했어요!</p>
  }

  if (loading || !banner) {
    console.group('components → common → [Banner.js]')
    console.log('읽어들이는 중이거나 아직 데이터가 존재하지 않습니다.')
    console.groupEnd()

    return <p>읽어들이는 중이거나 아직 데이터가 존재하지 않습니다.</p>
  }

  if (!banner) {
    console.group('components → common → [Banner.js]')
    console.log('목록이 존재하지 않습니다.')
    console.groupEnd()

    return <p>목록이 존재하지 않습니다.</p>
  }

  return (
    <>
      <div className="group_banner">
        <div className="list_banner slick">
          {banner.map((currentValue, index) => {
            console.log('currentValue: ', currentValue)
            return (
              <li key={currentValue.number}>
                <Link to="/" className="link_banner">
                  <img src={`http://localhost:4000/uploads/${currentValue.thumbnail}`} alt="" className="thumbnail_banner" />
                </Link>
              </li>
            )
          })}
        </div>

        <div className="banner_page">
          <button type="button" className="button_page slick-prev">
            <span>이전</span>
          </button>
          <button type="button" className="button_page slick-next">
            <span>다음</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default React.memo(Banner)
