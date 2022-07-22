import React, { useState } from "react";
import PropTypes from 'prop-types';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper/core";
import "swiper/css";
import "swiper/css/pagination";
import { CardMedia, List, ListItem } from "@mui/material";

SwiperCore.use([Pagination, Autoplay]);

const OpenProject = ({id, handleClose}) => {
    const BootstrapDialogTitle = (props) => {
        const { children, onClose, ...other } = props;
      
        return (
          <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
              <IconButton
                aria-label="close"
                onClick={onClose}
                sx={{
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  color: (theme) => theme.palette.grey[500],
                }}
              >
                <CloseIcon />
              </IconButton>
            ) : null}
          </DialogTitle>
        );
      };
      
      BootstrapDialogTitle.propTypes = {
        children: PropTypes.node,
        onClose: PropTypes.func.isRequired,
    };
    
    const [pick] = useState(id);
    const brifImg = ["img/brif/brif_main.jpg", "img/brif/brif_1.jpg", "img/brif/brif_2.jpg", "img/brif/brif_3.jpg", "img/brif/brif_4.jpg", "img/brif/brif_5.jpg", "img/brif/brif_6.jpg"
                     , "img/brif/brif_7.jpg", "img/brif/brif_8.jpg", "img/brif/brif_9.jpg", "img/brif/brif_10.jpg", "img/brif/brif_11.jpg", "img/brif/brif_12.jpg", "img/brif/brif_13.jpg"]

    const emplImg = ["img/empl/empl_1.jpg", "img/empl/empl_2.jpg", "img/empl/empl_3.jpg", "img/empl/empl_4.jpg", "img/empl/empl_5.jpg", "img/empl/empl_6.jpg", "img/empl/empl_7.jpg"
                    , "img/empl/empl_8.jpg", "img/empl/empl_9.jpg", "img/empl/empl_10.jpg", "img/empl/empl_11.jpg", "img/empl/empl_12.jpg", "img/empl/empl_13.jpg", "img/empl/empl_14.jpg"]
    
    const menuImg = ["img/menu/menu_1.jpg", "img/menu/menu_2.jpg", "img/menu/menu_3.jpg", "img/menu/menu_4.jpg"]
    
    const setImg = ["img/appSet/set_1.jpg", "img/appSet/set_2.jpg", "img/appSet/set_3.jpg", "img/appSet/set_4.jpg", "img/appSet/set_5.jpg"]

    const airImg = ["img/air/air_1.jpg", "img/air/air_2.jpg", "img/air/air_3.jpg", "img/air/air_4.jpg", "img/air/air_5.png", "img/air/air_6.png"]

    var content;

    var briefing = (
        <div>
            <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose} sx={{fontWeight: "bold"}}>
                프리미엄 보고서 서비스
            </BootstrapDialogTitle>
            <DialogContent dividers>
            <Swiper
                style={{
                    width: "400px",
                    height: "720px",
                    borderRadius: "12px",
                }}
                spaceBetween={8}
                initialSlide={0}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{ delay: 3000 }}
                >
                {brifImg.map(rec => (
                    <SwiperSlide>
                         <CardMedia
                            component="img"
                            image={ rec }
                            />
                    </SwiperSlide>
                    )
                )}  
            </Swiper>
            </DialogContent>
            <DialogActions>
                <List>
                    <ListItem><Typography gutterBottom sx={{ fontWeight: "bold" }}>◆ 소상공인들의 매출/지출 현황을 알려주기 위한 서비스 ◆</Typography></ListItem>
                    <ListItem><Typography gutterBottom variant="body2" sx={{ fontWeight: "bold" }}>- 하루/한주/한달/한해 보고서 개발</Typography></ListItem>
                    <ListItem><Typography gutterBottom variant="body2" sx={{ fontWeight: "bold" }}>- 사업장 전환 개발</Typography></ListItem>
                    <ListItem><Typography gutterBottom variant="body2" sx={{ fontWeight: "bold" }}>- 목표 매출 달성량 개발</Typography></ListItem>
                    <ListItem><Typography gutterBottom variant="body2" sx={{ fontWeight: "bold" }}>- 세무사 진단표 개발</Typography></ListItem>
                    <ListItem><Typography gutterBottom variant="body2" sx={{ fontWeight: "bold" }}>- 사업장 업종/업태 주소 등록 개발</Typography></ListItem>
                    <ListItem><Typography gutterBottom variant="body2" sx={{ fontWeight: "bold" }}>- 카카오톡 푸쉬 알림 카드 개발</Typography></ListItem>
                </List>
            </DialogActions>
        </div>
    ) 

    var empl = (
        <div>
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose} sx={{fontWeight: "bold"}}>
            직원관리 서비스
        </BootstrapDialogTitle>
        <DialogContent dividers>
        <Swiper
                style={{
                    width: "400px",
                    height: "760px",
                    borderRadius: "12px",
                }}
                spaceBetween={8}
                initialSlide={0}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{ delay: 3000 }}
                >
                {emplImg.map(rec => (
                    <SwiperSlide>
                         <CardMedia
                            component="img"
                            image={ rec }
                            />
                    </SwiperSlide>
                    )
                )}  
            </Swiper>
            </DialogContent>
            <DialogActions>
                <List>
                    <ListItem><Typography gutterBottom width={400} sx={{ fontWeight: "bold" }}>◆ 효율적인 직원관리 서비스 ◆</Typography></ListItem>
                    <ListItem><Typography gutterBottom variant="body2" sx={{ fontWeight: "bold" }}>- 직원 등록 개발</Typography></ListItem>
                    <ListItem><Typography gutterBottom variant="body2" sx={{ fontWeight: "bold" }}>- 상세보기 / 휴직 등록 / 퇴사 등록 개발</Typography></ListItem>
                    <ListItem><Typography gutterBottom variant="body2" sx={{ fontWeight: "bold" }}>- 입사서류(근로계약서, 보건증 등) 등록 개발</Typography></ListItem>
                    <ListItem><Typography gutterBottom variant="body2" sx={{ fontWeight: "bold" }}>- 카카오톡 공유 개발(직원 목록, 서류 요청)</Typography></ListItem>
                    <ListItem><Typography gutterBottom variant="body2" sx={{ fontWeight: "bold" }}>- 사업장 업종/업태 주소 등록 개발</Typography></ListItem>
                    <ListItem><Typography gutterBottom variant="body2" sx={{ fontWeight: "bold" }}>- 카카오톡 알림 관리 및 테스트 ADMIN 페이지 개발</Typography></ListItem>
                </List>
        </DialogActions>
    </div>
    )

    var menu = (
        <div>
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose} sx={{fontWeight: "bold"}}>
            전체 메뉴 서비스
        </BootstrapDialogTitle>
        <DialogContent dividers>
        <Swiper
                style={{
                    width: "400px",
                    height: "760px",
                    borderRadius: "12px",
                }}
                spaceBetween={8}
                initialSlide={0}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{ delay: 3000 }}
                >
                {menuImg.map(rec => (
                    <SwiperSlide>
                         <CardMedia
                            component="img"
                            image={ rec }
                            />
                    </SwiperSlide>
                    )
                )}  
            </Swiper>
            </DialogContent>
            <DialogActions>
                <List>
                    <ListItem><Typography gutterBottom width={400} sx={{ fontWeight: "bold" }}>◆ 사용자들의 사용성을 고려한 메뉴관리 서비스 ◆</Typography></ListItem>
                    <ListItem><Typography gutterBottom variant="body2" sx={{ fontWeight: "bold" }}>- 전체 메뉴 개발</Typography></ListItem>
                    <ListItem><Typography gutterBottom variant="body2" sx={{ fontWeight: "bold" }}>- 매출(증빙 자료) 수집 / 연결 관리 개발</Typography></ListItem>
                    <ListItem><Typography gutterBottom variant="body2" sx={{ fontWeight: "bold" }}>- 홈택스 계정 관리 개발</Typography></ListItem>
                    <ListItem><Typography gutterBottom variant="body2" sx={{ fontWeight: "bold" }}>- 카드 매출(여신금융 협회) 계정 관리 개발</Typography></ListItem>
                    <ListItem><Typography gutterBottom variant="body2" sx={{ fontWeight: "bold" }}>- 전체 메뉴 관리 ADMIN 페이지 개발</Typography></ListItem>
                </List>
        </DialogActions>
    </div>
    )

    var appSet = (
        <div>
            <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose} sx={{fontWeight: "bold"}}>
                 앱 설정 서비스
            </BootstrapDialogTitle>
            <DialogContent dividers>
            <Swiper
                style={{
                    width: "400px",
                    height: "760px",
                    borderRadius: "12px",
                }}
                spaceBetween={8}
                initialSlide={0}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{ delay: 3000 }}
                >
                {setImg.map(rec => (
                    <SwiperSlide>
                        <CardMedia
                            component="img"
                            image={ rec }
                            />
                    </SwiperSlide>
                    )
                )}  
            </Swiper>
            </DialogContent>
            <DialogActions>
                <List>
                    <ListItem><Typography gutterBottom width={400} sx={{ fontWeight: "bold" }}>◆ 앱 설정 서비스 ◆</Typography></ListItem>
                    <ListItem><Typography gutterBottom variant="body2" sx={{ fontWeight: "bold" }}>- 공동인증서 관리 개발</Typography></ListItem>
                    <ListItem><Typography gutterBottom variant="body2" sx={{ fontWeight: "bold" }}>- 매출/지출 용도 설정 개발</Typography></ListItem>
                    <ListItem><Typography gutterBottom variant="body2" sx={{ fontWeight: "bold" }}>- 알림 설정 개발</Typography></ListItem>
                </List>
            </DialogActions>
        </div>
    )

    var air = (
        <div>
            <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose} sx={{fontWeight: "bold"}}>
                 미세먼지 앱
            </BootstrapDialogTitle>
            <DialogContent dividers>
            <Swiper
                style={{
                    width: "400px",
                    height: "760px",
                    borderRadius: "12px",
                }}
                spaceBetween={8}
                initialSlide={0}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{ delay: 3000 }}
                >
                {airImg.map(rec => (
                    <SwiperSlide>
                        <CardMedia
                            component="img"
                            image={ rec }
                            />
                    </SwiperSlide>
                    )
                )}  
            </Swiper>
            </DialogContent>
            <DialogActions>
                <List>
                    <ListItem><Typography gutterBottom width={400} sx={{ fontWeight: "bold" }}>◆ 앱 설정 서비스 ◆</Typography></ListItem>
                    <ListItem><Typography gutterBottom variant="body2" sx={{ fontWeight: "bold" }}>- 공동인증서 관리 개발</Typography></ListItem>
                    <ListItem><Typography gutterBottom variant="body2" sx={{ fontWeight: "bold" }}>- 매출/지출 용도 설정 개발</Typography></ListItem>
                    <ListItem><Typography gutterBottom variant="body2" sx={{ fontWeight: "bold" }}>- 알림 설정 개발</Typography></ListItem>
                </List>
            </DialogActions>
        </div>
    )
    switch (pick) {
        case 1: content = briefing
            break
        case 2: content = empl
            break
        case 3: content = menu
            break
        case 4: content = appSet
            break
            case 5: content = air
        default :
            break
        
    }

    return content
}
export default OpenProject