import React, { createContext, useContext } from "react";

import { MessengerType, useMessenger } from "../hooks/messenger/useMessenger";

import { useIdentity, useNickname } from "./identityProvider";

const MessengerContext = createContext<MessengerType>({
  messenger: undefined,
  messages: [],
  sendMessage: async () => undefined,
  notifications: {},
  clearNotifications: () => undefined,
  mentions: {},
  clearMentions: () => undefined,
  loadPrevDay: async () => undefined,
  loadingMessages: false,
  loadingMessenger: true,
  communityData: undefined,
  contacts: {},
  contactsDispatch: () => undefined,
  addContact: () => undefined,
  activeChannel: undefined,
  channels: {},
  channelsDispatch: () => undefined,
  removeChannel: () => undefined,
  createGroupChat: () => undefined,
  changeGroupChatName: () => undefined,
  addMembers: () => undefined,
  nickname: undefined,
  subscriptionsDispatch: () => undefined,
});

export function useMessengerContext() {
  return useContext(MessengerContext);
}

interface MessengerProviderProps {
  communityKey: string | undefined;
  children: React.ReactNode;
}

export function MessengerProvider({
  communityKey,
  children,
}: MessengerProviderProps) {
  const identity = useIdentity();
  const nickname = useNickname();
  const messenger = useMessenger(communityKey, identity, nickname);
  return <MessengerContext.Provider value={messenger} children={children} />;
}