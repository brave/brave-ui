/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import { normalizeSocialUrl } from './helpers'

test('normalize with null inputs', () => {
  expect(normalizeSocialUrl()).toBe('')
})

test('normalize with null second input', () => {
  expect(normalizeSocialUrl('twitter', null)).toBe('')
})

test('normalize with invalid type', () => {
  expect(normalizeSocialUrl('soundcloud', 'https://soundcloud.com/')).toBe('')
})

test('normalize with invalid URLs', () => {
  expect(normalizeSocialUrl('twitch', 'https://twitch.com/')).toBe('')
  expect(normalizeSocialUrl('twitch', 'https://twitchxtv/')).toBe('')
  expect(normalizeSocialUrl('twitter', 'https://www.twitch.com/')).toBe('')
  expect(normalizeSocialUrl('twitter', 'ahttps://www.twitter.com/')).toBe('')
  expect(normalizeSocialUrl('twitter', 'https://www.twitter.com')).toBe('')
  expect(normalizeSocialUrl('youtube', 'http://youtube.com/')).toBe('')
  expect(normalizeSocialUrl('youtube', 'youtube.com')).toBe('')
  expect(normalizeSocialUrl('youtube', 'www.youtube.com')).toBe('')
  expect(normalizeSocialUrl('youtube', 'wwwyoutube.com/')).toBe('')
  expect(normalizeSocialUrl('twitch', 'https://youtube.com/')).toBe('')
})

test('normalize with valid URLs', () => {
  expect(normalizeSocialUrl('twitch', 'https://twitch.tv/'))
    .toBe('https://twitch.tv/')
  expect(normalizeSocialUrl('twitch', 'https://www.twitch.tv/test'))
    .toBe('https://www.twitch.tv/test')
  expect(normalizeSocialUrl('youtube', 'www.youtube.com/foo.bar'))
    .toBe('https://www.youtube.com/foo.bar')
  expect(normalizeSocialUrl('youtube', 'youtube.com/'))
    .toBe('https://youtube.com/')
  expect(normalizeSocialUrl('twitter', 'twitter.com/omg/omg/?test#hashtag'))
    .toBe('https://twitter.com/omg/omg/?test#hashtag')
  expect(normalizeSocialUrl('twitter', 'https://www.twitter.com/?test#hashtag'))
    .toBe('https://www.twitter.com/?test#hashtag')
})
