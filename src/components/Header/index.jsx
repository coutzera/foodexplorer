import { ButtonHeader } from "../ButtonHeader";
import { Container, Brand, Logout } from "./styles";
import { LuLogOut } from "react-icons/lu";

export function Header() {
  return (
    <Container>
      <nav>
        <Brand>
          <svg
            width="41"
            height="40"
            viewBox="0 0 31 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.5391 0L28.5294 7.5V22.5L15.5391 30L2.54868 22.5V7.5L15.5391 0Z"
              fill="#065E7C"
            />
          </svg>

          <svg
            width="220"
            height="50"
            viewBox="0 0 147 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.15234 22H2.75391V8.19531C2.75391 7.23438 2.94141 6.42578 3.31641 5.76953C3.69922 5.10547 4.23438 4.60547 4.92188 4.26953C5.61719 3.92578 6.44141 3.75391 7.39453 3.75391C7.70703 3.75391 8.00781 3.77734 8.29688 3.82422C8.58594 3.86328 8.86719 3.91406 9.14062 3.97656L9.10547 6.51953C8.95703 6.48047 8.80078 6.45312 8.63672 6.4375C8.47266 6.42188 8.28125 6.41406 8.0625 6.41406C7.65625 6.41406 7.30859 6.48438 7.01953 6.625C6.73828 6.75781 6.52344 6.95703 6.375 7.22266C6.22656 7.48828 6.15234 7.8125 6.15234 8.19531V22ZM8.68359 9.32031V11.7109H0.867188V9.32031H8.68359ZM9.91406 15.7891V15.543C9.91406 14.6133 10.0469 13.7578 10.3125 12.9766C10.5781 12.1875 10.9648 11.5039 11.4727 10.9258C11.9805 10.3477 12.6055 9.89844 13.3477 9.57812C14.0898 9.25 14.9414 9.08594 15.9023 9.08594C16.8633 9.08594 17.7188 9.25 18.4688 9.57812C19.2188 9.89844 19.8477 10.3477 20.3555 10.9258C20.8711 11.5039 21.2617 12.1875 21.5273 12.9766C21.793 13.7578 21.9258 14.6133 21.9258 15.543V15.7891C21.9258 16.7109 21.793 17.5664 21.5273 18.3555C21.2617 19.1367 20.8711 19.8203 20.3555 20.4062C19.8477 20.9844 19.2227 21.4336 18.4805 21.7539C17.7383 22.0742 16.8867 22.2344 15.9258 22.2344C14.9648 22.2344 14.1094 22.0742 13.3594 21.7539C12.6172 21.4336 11.9883 20.9844 11.4727 20.4062C10.9648 19.8203 10.5781 19.1367 10.3125 18.3555C10.0469 17.5664 9.91406 16.7109 9.91406 15.7891ZM13.2891 15.543V15.7891C13.2891 16.3203 13.3359 16.8164 13.4297 17.2773C13.5234 17.7383 13.6719 18.1445 13.875 18.4961C14.0859 18.8398 14.3594 19.1094 14.6953 19.3047C15.0312 19.5 15.4414 19.5977 15.9258 19.5977C16.3945 19.5977 16.7969 19.5 17.1328 19.3047C17.4688 19.1094 17.7383 18.8398 17.9414 18.4961C18.1445 18.1445 18.293 17.7383 18.3867 17.2773C18.4883 16.8164 18.5391 16.3203 18.5391 15.7891V15.543C18.5391 15.0273 18.4883 14.543 18.3867 14.0898C18.293 13.6289 18.1406 13.2227 17.9297 12.8711C17.7266 12.5117 17.457 12.2305 17.1211 12.0273C16.7852 11.8242 16.3789 11.7227 15.9023 11.7227C15.4258 11.7227 15.0195 11.8242 14.6836 12.0273C14.3555 12.2305 14.0859 12.5117 13.875 12.8711C13.6719 13.2227 13.5234 13.6289 13.4297 14.0898C13.3359 14.543 13.2891 15.0273 13.2891 15.543ZM23.4609 15.7891V15.543C23.4609 14.6133 23.5938 13.7578 23.8594 12.9766C24.125 12.1875 24.5117 11.5039 25.0195 10.9258C25.5273 10.3477 26.1523 9.89844 26.8945 9.57812C27.6367 9.25 28.4883 9.08594 29.4492 9.08594C30.4102 9.08594 31.2656 9.25 32.0156 9.57812C32.7656 9.89844 33.3945 10.3477 33.9023 10.9258C34.418 11.5039 34.8086 12.1875 35.0742 12.9766C35.3398 13.7578 35.4727 14.6133 35.4727 15.543V15.7891C35.4727 16.7109 35.3398 17.5664 35.0742 18.3555C34.8086 19.1367 34.418 19.8203 33.9023 20.4062C33.3945 20.9844 32.7695 21.4336 32.0273 21.7539C31.2852 22.0742 30.4336 22.2344 29.4727 22.2344C28.5117 22.2344 27.6562 22.0742 26.9062 21.7539C26.1641 21.4336 25.5352 20.9844 25.0195 20.4062C24.5117 19.8203 24.125 19.1367 23.8594 18.3555C23.5938 17.5664 23.4609 16.7109 23.4609 15.7891ZM26.8359 15.543V15.7891C26.8359 16.3203 26.8828 16.8164 26.9766 17.2773C27.0703 17.7383 27.2188 18.1445 27.4219 18.4961C27.6328 18.8398 27.9062 19.1094 28.2422 19.3047C28.5781 19.5 28.9883 19.5977 29.4727 19.5977C29.9414 19.5977 30.3438 19.5 30.6797 19.3047C31.0156 19.1094 31.2852 18.8398 31.4883 18.4961C31.6914 18.1445 31.8398 17.7383 31.9336 17.2773C32.0352 16.8164 32.0859 16.3203 32.0859 15.7891V15.543C32.0859 15.0273 32.0352 14.543 31.9336 14.0898C31.8398 13.6289 31.6875 13.2227 31.4766 12.8711C31.2734 12.5117 31.0039 12.2305 30.668 12.0273C30.332 11.8242 29.9258 11.7227 29.4492 11.7227C28.9727 11.7227 28.5664 11.8242 28.2305 12.0273C27.9023 12.2305 27.6328 12.5117 27.4219 12.8711C27.2188 13.2227 27.0703 13.6289 26.9766 14.0898C26.8828 14.543 26.8359 15.0273 26.8359 15.543ZM45.0352 19.2344V4H48.4336V22H45.375L45.0352 19.2344ZM37.0195 15.8125V15.5664C37.0195 14.5977 37.1289 13.7188 37.3477 12.9297C37.5664 12.1328 37.8867 11.4492 38.3086 10.8789C38.7305 10.3086 39.25 9.86719 39.8672 9.55469C40.4844 9.24219 41.1875 9.08594 41.9766 9.08594C42.7188 9.08594 43.3672 9.24219 43.9219 9.55469C44.4844 9.86719 44.9609 10.3125 45.3516 10.8906C45.75 11.4609 46.0703 12.1367 46.3125 12.918C46.5547 13.6914 46.7305 14.5391 46.8398 15.4609V16C46.7305 16.8828 46.5547 17.7031 46.3125 18.4609C46.0703 19.2188 45.75 19.8828 45.3516 20.4531C44.9609 21.0156 44.4844 21.4531 43.9219 21.7656C43.3594 22.0781 42.7031 22.2344 41.9531 22.2344C41.1641 22.2344 40.4609 22.0742 39.8438 21.7539C39.2344 21.4336 38.7188 20.9844 38.2969 20.4062C37.8828 19.8281 37.5664 19.1484 37.3477 18.3672C37.1289 17.5859 37.0195 16.7344 37.0195 15.8125ZM40.3945 15.5664V15.8125C40.3945 16.3359 40.4336 16.8242 40.5117 17.2773C40.5977 17.7305 40.7344 18.1328 40.9219 18.4844C41.1172 18.8281 41.3672 19.0977 41.6719 19.293C41.9844 19.4805 42.3633 19.5742 42.8086 19.5742C43.3867 19.5742 43.8633 19.4453 44.2383 19.1875C44.6133 18.9219 44.8984 18.5586 45.0938 18.0977C45.2969 17.6367 45.4141 17.1055 45.4453 16.5039V14.9688C45.4219 14.4766 45.3516 14.0352 45.2344 13.6445C45.125 13.2461 44.9609 12.9062 44.7422 12.625C44.5312 12.3438 44.2656 12.125 43.9453 11.9688C43.6328 11.8125 43.2617 11.7344 42.832 11.7344C42.3945 11.7344 42.0195 11.8359 41.707 12.0391C41.3945 12.2344 41.1406 12.5039 40.9453 12.8477C40.7578 13.1914 40.6172 13.5977 40.5234 14.0664C40.4375 14.5273 40.3945 15.0273 40.3945 15.5664ZM62.8828 22.2344C61.8984 22.2344 61.0156 22.0781 60.2344 21.7656C59.4531 21.4453 58.7891 21.0039 58.2422 20.4414C57.7031 19.8789 57.2891 19.2266 57 18.4844C56.7109 17.7344 56.5664 16.9375 56.5664 16.0938V15.625C56.5664 14.6641 56.7031 13.7852 56.9766 12.9883C57.25 12.1914 57.6406 11.5 58.1484 10.9141C58.6641 10.3281 59.2891 9.87891 60.0234 9.56641C60.7578 9.24609 61.5859 9.08594 62.5078 9.08594C63.4062 9.08594 64.2031 9.23438 64.8984 9.53125C65.5938 9.82812 66.1758 10.25 66.6445 10.7969C67.1211 11.3438 67.4805 12 67.7227 12.7656C67.9648 13.5234 68.0859 14.3672 68.0859 15.2969V16.7031H58.0078V14.4531H64.7695V14.1953C64.7695 13.7266 64.6836 13.3086 64.5117 12.9414C64.3477 12.5664 64.0977 12.2695 63.7617 12.0508C63.4258 11.832 62.9961 11.7227 62.4727 11.7227C62.0273 11.7227 61.6445 11.8203 61.3242 12.0156C61.0039 12.2109 60.7422 12.4844 60.5391 12.8359C60.3438 13.1875 60.1953 13.6016 60.0938 14.0781C60 14.5469 59.9531 15.0625 59.9531 15.625V16.0938C59.9531 16.6016 60.0234 17.0703 60.1641 17.5C60.3125 17.9297 60.5195 18.3008 60.7852 18.6133C61.0586 18.9258 61.3867 19.168 61.7695 19.3398C62.1602 19.5117 62.6016 19.5977 63.0938 19.5977C63.7031 19.5977 64.2695 19.4805 64.793 19.2461C65.3242 19.0039 65.7812 18.6406 66.1641 18.1562L67.8047 19.9375C67.5391 20.3203 67.1758 20.6875 66.7148 21.0391C66.2617 21.3906 65.7148 21.6797 65.0742 21.9062C64.4336 22.125 63.7031 22.2344 62.8828 22.2344ZM72.7266 9.32031L74.8242 13.1758L76.9805 9.32031H80.5781L76.9922 15.5195L80.7422 22H77.1328L74.8477 17.9219L72.5625 22H68.9531L72.7031 15.5195L69.1172 9.32031H72.7266ZM85.5938 11.7578V26.875H82.2188V9.32031H85.3477L85.5938 11.7578ZM93.6211 15.5195V15.7656C93.6211 16.6875 93.5117 17.543 93.293 18.332C93.082 19.1211 92.7695 19.8086 92.3555 20.3945C91.9414 20.9727 91.4258 21.4258 90.8086 21.7539C90.1992 22.0742 89.4961 22.2344 88.6992 22.2344C87.9258 22.2344 87.2539 22.0781 86.6836 21.7656C86.1133 21.4531 85.6328 21.0156 85.2422 20.4531C84.8594 19.8828 84.5508 19.2227 84.3164 18.4727C84.082 17.7227 83.9023 16.918 83.7773 16.0586V15.4141C83.9023 14.4922 84.082 13.6484 84.3164 12.8828C84.5508 12.1094 84.8594 11.4414 85.2422 10.8789C85.6328 10.3086 86.1094 9.86719 86.6719 9.55469C87.2422 9.24219 87.9102 9.08594 88.6758 9.08594C89.4805 9.08594 90.1875 9.23828 90.7969 9.54297C91.4141 9.84766 91.9297 10.2852 92.3438 10.8555C92.7656 11.4258 93.082 12.1055 93.293 12.8945C93.5117 13.6836 93.6211 14.5586 93.6211 15.5195ZM90.2344 15.7656V15.5195C90.2344 14.9805 90.1875 14.4844 90.0938 14.0312C90.0078 13.5703 89.8672 13.168 89.6719 12.8242C89.4844 12.4805 89.2344 12.2148 88.9219 12.0273C88.6172 11.832 88.2461 11.7344 87.8086 11.7344C87.3477 11.7344 86.9531 11.8086 86.625 11.957C86.3047 12.1055 86.043 12.3203 85.8398 12.6016C85.6367 12.8828 85.4844 13.2188 85.3828 13.6094C85.2812 14 85.2188 14.4414 85.1953 14.9336V16.5625C85.2344 17.1406 85.3438 17.6602 85.5234 18.1211C85.7031 18.5742 85.9805 18.9336 86.3555 19.1992C86.7305 19.4648 87.2227 19.5977 87.832 19.5977C88.2773 19.5977 88.6523 19.5 88.957 19.3047C89.2617 19.1016 89.5078 18.8242 89.6953 18.4727C89.8906 18.1211 90.0273 17.7148 90.1055 17.2539C90.1914 16.793 90.2344 16.2969 90.2344 15.7656ZM99.2812 4V22H95.8945V4H99.2812ZM101.531 15.7891V15.543C101.531 14.6133 101.664 13.7578 101.93 12.9766C102.195 12.1875 102.582 11.5039 103.09 10.9258C103.598 10.3477 104.223 9.89844 104.965 9.57812C105.707 9.25 106.559 9.08594 107.52 9.08594C108.48 9.08594 109.336 9.25 110.086 9.57812C110.836 9.89844 111.465 10.3477 111.973 10.9258C112.488 11.5039 112.879 12.1875 113.145 12.9766C113.41 13.7578 113.543 14.6133 113.543 15.543V15.7891C113.543 16.7109 113.41 17.5664 113.145 18.3555C112.879 19.1367 112.488 19.8203 111.973 20.4062C111.465 20.9844 110.84 21.4336 110.098 21.7539C109.355 22.0742 108.504 22.2344 107.543 22.2344C106.582 22.2344 105.727 22.0742 104.977 21.7539C104.234 21.4336 103.605 20.9844 103.09 20.4062C102.582 19.8203 102.195 19.1367 101.93 18.3555C101.664 17.5664 101.531 16.7109 101.531 15.7891ZM104.906 15.543V15.7891C104.906 16.3203 104.953 16.8164 105.047 17.2773C105.141 17.7383 105.289 18.1445 105.492 18.4961C105.703 18.8398 105.977 19.1094 106.312 19.3047C106.648 19.5 107.059 19.5977 107.543 19.5977C108.012 19.5977 108.414 19.5 108.75 19.3047C109.086 19.1094 109.355 18.8398 109.559 18.4961C109.762 18.1445 109.91 17.7383 110.004 17.2773C110.105 16.8164 110.156 16.3203 110.156 15.7891V15.543C110.156 15.0273 110.105 14.543 110.004 14.0898C109.91 13.6289 109.758 13.2227 109.547 12.8711C109.344 12.5117 109.074 12.2305 108.738 12.0273C108.402 11.8242 107.996 11.7227 107.52 11.7227C107.043 11.7227 106.637 11.8242 106.301 12.0273C105.973 12.2305 105.703 12.5117 105.492 12.8711C105.289 13.2227 105.141 13.6289 105.047 14.0898C104.953 14.543 104.906 15.0273 104.906 15.543ZM118.992 12.0859V22H115.617V9.32031H118.793L118.992 12.0859ZM122.812 9.23828L122.754 12.3672C122.59 12.3438 122.391 12.3242 122.156 12.3086C121.93 12.2852 121.723 12.2734 121.535 12.2734C121.059 12.2734 120.645 12.3359 120.293 12.4609C119.949 12.5781 119.66 12.7539 119.426 12.9883C119.199 13.2227 119.027 13.5078 118.91 13.8438C118.801 14.1797 118.738 14.5625 118.723 14.9922L118.043 14.7812C118.043 13.9609 118.125 13.207 118.289 12.5195C118.453 11.8242 118.691 11.2188 119.004 10.7031C119.324 10.1875 119.715 9.78906 120.176 9.50781C120.637 9.22656 121.164 9.08594 121.758 9.08594C121.945 9.08594 122.137 9.10156 122.332 9.13281C122.527 9.15625 122.688 9.19141 122.812 9.23828ZM130.008 22.2344C129.023 22.2344 128.141 22.0781 127.359 21.7656C126.578 21.4453 125.914 21.0039 125.367 20.4414C124.828 19.8789 124.414 19.2266 124.125 18.4844C123.836 17.7344 123.691 16.9375 123.691 16.0938V15.625C123.691 14.6641 123.828 13.7852 124.102 12.9883C124.375 12.1914 124.766 11.5 125.273 10.9141C125.789 10.3281 126.414 9.87891 127.148 9.56641C127.883 9.24609 128.711 9.08594 129.633 9.08594C130.531 9.08594 131.328 9.23438 132.023 9.53125C132.719 9.82812 133.301 10.25 133.77 10.7969C134.246 11.3438 134.605 12 134.848 12.7656C135.09 13.5234 135.211 14.3672 135.211 15.2969V16.7031H125.133V14.4531H131.895V14.1953C131.895 13.7266 131.809 13.3086 131.637 12.9414C131.473 12.5664 131.223 12.2695 130.887 12.0508C130.551 11.832 130.121 11.7227 129.598 11.7227C129.152 11.7227 128.77 11.8203 128.449 12.0156C128.129 12.2109 127.867 12.4844 127.664 12.8359C127.469 13.1875 127.32 13.6016 127.219 14.0781C127.125 14.5469 127.078 15.0625 127.078 15.625V16.0938C127.078 16.6016 127.148 17.0703 127.289 17.5C127.438 17.9297 127.645 18.3008 127.91 18.6133C128.184 18.9258 128.512 19.168 128.895 19.3398C129.285 19.5117 129.727 19.5977 130.219 19.5977C130.828 19.5977 131.395 19.4805 131.918 19.2461C132.449 19.0039 132.906 18.6406 133.289 18.1562L134.93 19.9375C134.664 20.3203 134.301 20.6875 133.84 21.0391C133.387 21.3906 132.84 21.6797 132.199 21.9062C131.559 22.125 130.828 22.2344 130.008 22.2344ZM140.508 12.0859V22H137.133V9.32031H140.309L140.508 12.0859ZM144.328 9.23828L144.27 12.3672C144.105 12.3438 143.906 12.3242 143.672 12.3086C143.445 12.2852 143.238 12.2734 143.051 12.2734C142.574 12.2734 142.16 12.3359 141.809 12.4609C141.465 12.5781 141.176 12.7539 140.941 12.9883C140.715 13.2227 140.543 13.5078 140.426 13.8438C140.316 14.1797 140.254 14.5625 140.238 14.9922L139.559 14.7812C139.559 13.9609 139.641 13.207 139.805 12.5195C139.969 11.8242 140.207 11.2188 140.52 10.7031C140.84 10.1875 141.23 9.78906 141.691 9.50781C142.152 9.22656 142.68 9.08594 143.273 9.08594C143.461 9.08594 143.652 9.10156 143.848 9.13281C144.043 9.15625 144.203 9.19141 144.328 9.23828Z"
              fill="white"
            />
          </svg>
        </Brand>
      </nav>
      <ButtonHeader title="Pedidos" />
      <Logout>
        <LuLogOut />
      </Logout>
    </Container>
  );
}