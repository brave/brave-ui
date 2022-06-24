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
  max-width: 100px;
  width: 50%;
  display: flex;
  flex-direction: column;
  margin: 8px
`

export const IconGridItemTitle = styled.div`
  flex: none;
  font: 600 10px Poppins;
  color: #424242;
  padding: 4px;
  text-align: center;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const IconGridItemIcon = styled.div`
  flex: 1;
  color: #424242;
  padding: 18px;
`
