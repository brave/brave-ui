import styled from 'styled-components'

export const IconGrid = styled.div`
  height: -webkit-fill-available;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  align-items: flex-start;
`

export const IconGridItem = styled.div`
  max-width: 200px;
  min-width: 50px;
  width: 25%;
  border: dashed 1px #555;
  display: flex;
  flex-direction: column;
  padding: 4px;
`

export const IconGridItemTitle = styled.div`
  flex: none;
  font: 400 12px monospace;
  color: white;
  background: #888;
  padding: 2px 0;
  text-align: center;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const IconGridItemIcon = styled.div`
  flex: 1;
  color: black;
`
