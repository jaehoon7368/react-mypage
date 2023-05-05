import React from 'react'
import '../Style/project.css'

import groupware from '../image/groupware.png'
import hotel from '../image/hotel.png'
import introduce from '../image/introduce.png'
import Card from './Card'

const Project = () => {
  return (
    <div className='project'>
      <p className='project-title'>Projects</p>
      <div className='project-area'>
        <Card img={groupware} title="그룹웨어(4명)"
          text="근태관리, 할일, 게시판, 메시지, 전자결제, 보고서, 주소록 기능."
          my='담당'
          my1='기능 기획, DB 설계'
          my2='Spring-Security을 활용한 로그인, 로그아웃, 회원관리 및 권한 기능'
          my3='월간, 주간, 일간, 부서별 근태관리 기능'
          img1="https://img.shields.io/badge/Spring-6DB33F?style=flat-square&logo=Spring&logoColor=white"
          img2="https://img.shields.io/badge/Mybatis-dimgray?style=flat-square"
          img3="https://img.shields.io/badge/Javascript-F7DF1E?style=flat-square&logo=Javascript&logoColor=white"
          img4="https://img.shields.io/badge/Apache%20Tomcat-F8DC75?style=flat-square&logo=apachetomcat&logoColor=black"
          page='http://43.200.241.19/'
          git="https://github.com/jaehoon7368/groupware-project" />
        
        <Card img={hotel} title="숙박사이트(4명)-PL"
          text="전반적인 숙박 사이트 기능과 회원은 숙소 예약, 판매자는 숙소 등록, 관리자는 권한 관리 기능"
          my='담당'
          my1="기능 기획, DB 설계"
          my2="메인페이지 제작"
          my3="숙소 검색 및 리뷰 기능"
          my4="Kakao Map api를 활용한 숙소 위치 기능"
          img1="https://img.shields.io/badge/Servlet%20&%20Jsp-white?style=flat-square&logo"
          img2="https://img.shields.io/badge/Javascript-F7DF1E?style=flat-square&logo=Javascript&logoColor=white"
          img3="https://img.shields.io/badge/Apache%20Tomcat-F8DC75?style=flat-square&logo=apachetomcat&logoColor=black"
          page='http://132.145.85.112:8080/'
          git="https://github.com/jaehoon7368/hotel-project" />
        
        <Card img={introduce} title="자기소개 페이지"
          text="Font-End만 활용히여 자기소개, 취미, 로드맵, 회원가입 기능"
          img1="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"
          img2="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"
          img3="https://img.shields.io/badge/Javascript-F7DF1E?style=flat-square&logo=Javascript&logoColor=white"
          page="https://jaehoon7368.github.io/"
          git="https://github.com/jaehoon7368/jaehoon7368.github.io" />
      </div>
    </div>
  )
}

export default Project