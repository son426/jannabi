import { Default, Mobile } from "./mediaquery";
import * as S from "../pages/regular1/regularDetailPage1.style";
import * as M from "../pages/regular1/mobile.style";
import { IRegularData } from "@/data/meta/regular1";
import React from "react";
import { ExitIcon, PauseIcon, PlayIcon } from "@/data/icon";

interface IMenuProps {
  isAudioPlaying: boolean;
  toggleAudio: () => void;
  onExit: () => void;
  albumData: IRegularData[];
  nowIndex: number;
  onTrackClick: (index: number) => void;
}

function Regular1Menu({
  isAudioPlaying,
  toggleAudio,
  onExit,
  albumData,
  nowIndex,
  onTrackClick,
}: IMenuProps) {
  return (
    <>
      <Default>
        <>
          <S.MenuDiv>
            {isAudioPlaying && (
              <S.Menu>
                <S.MenuColumn1>
                  <PauseIcon />
                </S.MenuColumn1>
                <S.MenuColumn2 onClick={toggleAudio}>
                  노래 일시정지
                </S.MenuColumn2>
              </S.Menu>
            )}
            {!isAudioPlaying && (
              <S.Menu>
                <S.MenuColumn1>
                  <PlayIcon />
                </S.MenuColumn1>
                <S.MenuColumn2 onClick={toggleAudio}>노래 재생</S.MenuColumn2>
              </S.Menu>
            )}
            <S.Menu onClick={onExit}>
              <S.MenuColumn1>
                <ExitIcon />
              </S.MenuColumn1>
              <S.MenuColumn2>몽키호텔 나가기</S.MenuColumn2>
            </S.Menu>
            <S.Menu>
              <S.PlayerDiv>
                {albumData.map((album, index) => (
                  <S.PlayerRow
                    key={index}
                    isboolean={index === nowIndex}
                    onClick={() => onTrackClick(index)}
                  >
                    <S.PlayerColumn1>{album.index}</S.PlayerColumn1>
                    <S.PlayerColumn2>{album.title}</S.PlayerColumn2>
                  </S.PlayerRow>
                ))}
              </S.PlayerDiv>
            </S.Menu>
          </S.MenuDiv>
        </>
      </Default>
      <Mobile>
        <M.MenuDiv onClick={(e: any) => e.stopPropagation()}>
          {isAudioPlaying && (
            <M.Menu>
              <M.MenuColumn1>
                <PauseIcon />
              </M.MenuColumn1>
              <M.MenuColumn2 onClick={toggleAudio}>노래 일시정지</M.MenuColumn2>
            </M.Menu>
          )}
          {!isAudioPlaying && (
            <M.Menu>
              <M.MenuColumn1>
                <PlayIcon />
              </M.MenuColumn1>
              <M.MenuColumn2 onClick={toggleAudio}>노래 재생</M.MenuColumn2>
            </M.Menu>
          )}
          <M.Menu>
            <M.PlayerDiv>
              {albumData.map((album, index) => (
                <M.PlayerRow
                  key={index}
                  isboolean={index === nowIndex}
                  onClick={() => onTrackClick(index)}
                >
                  <M.PlayerColumn1>{album.index}</M.PlayerColumn1>
                  <M.PlayerColumn2>{album.title}</M.PlayerColumn2>
                </M.PlayerRow>
              ))}
            </M.PlayerDiv>
          </M.Menu>
          <M.Menu onClick={onExit}>
            <M.MenuColumn1>
              <ExitIcon />
            </M.MenuColumn1>
            <M.MenuColumn2>몽키호텔 나가기</M.MenuColumn2>
          </M.Menu>
        </M.MenuDiv>
      </Mobile>
    </>
  );
}

export default Regular1Menu;
