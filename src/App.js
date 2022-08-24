import React, { useEffect } from 'react';
import { VideoSDKMeeting } from '@videosdk.live/rtc-js-prebuilt';

export default function App() {
  useEffect(() => {
    const apiKey = process.env.REACT_APP_VIDEOSDK_API_KEY;
    const meetingId = 'milkyway';
    const name = 'Demo User';

    const config = {
      name: name,
      meetingId: meetingId,
      apiKey: apiKey,

      containerId: null,

      micEnabled: true,
      webcamEnabled: true,
      participantCanToggleSelfWebcam: true,
      participantCanToggleSelfMic: true,
      raiseHandEnabled: true,
      chatEnabled: true,
      screenShareEnabled: true,
      whiteboardEnabled: true,

      //   debug
      debug: true,

      //   leftScreen
      leftScreen: {
        // actionButton: {
        //   label: 'Video SDK',
        //   href: 'https://videosdk.live/',
        // },
        rejoinButtonEnabled: true,
      },

      //  join screen
      joinScreen: {
        visible: true,
        title: 'Your Meeting',
        meetingUrl: 'customURL.com',
      },

      //   layout
      layout: {
        type: 'SIDEBAR', // "SPOTLIGHT" | "SIDEBAR" | "GRID"
        priority: 'PIN', // "SPEAKER" | "PIN",
        gridSize: 3,
      },

      //   recording
      recording: {
        enabled: true,
        webhookUrl: 'https://www.videosdk.live/callback',
        //   awsDirPath: `/meeting-recordings/${meetingId}/`,
        autoStart: false,
      },

      //   live stream
      livestream: {
        autoStart: true,
        enabled: true,
      },

      //   permissions
      permissions: {
        pin: true,
        toggleRecording: true,
        toggleLivestream: true,
        changeLayout: true,
        // askToJoin: true,
        toggleParticipantWebcam: true,
        toggleParticipantMic: true,
        toggleParticipantScreenshare: true,
        removeParticipant: true,
        endMeeting: true,
        canCreatePoll: true,
        drawOnWhiteboard: true,
        toggleWhiteboard: true,
      },
    };

    const meeting = new VideoSDKMeeting();
    meeting.init(config);
  }, []);

  return <div></div>;
}
