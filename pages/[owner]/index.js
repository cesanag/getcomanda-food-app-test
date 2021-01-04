import React, { useEffect, useState } from "react";

import styled from "@emotion/styled";
import { Copy } from "assets/copy";
import { Colors, Visibility } from "assets/variables";

import Item from "components/item";
import OwnerContainer from "components/ownerContainer"

import { StandardLayout } from "layout";
import Search from "antd/lib/input/Search";

import { getOwnerBySlug, getOwners } from "services/owner";
import { getAllItems } from "services/items";

const { visible, hidden } = Visibility;

const PanelContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
`
const NavigatorContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  align-items: center;
`
const FiltersContainer = styled.div`
  display: ${(props) => (props.display ? hidden : visible)};
  padding: 25px;
  flex-wrap: wrap;
  background-color: ${Colors.white};
  box-shadow: -8px 12px 26px -10px ${Colors.blackOpaque};
`

export async function getStaticPaths() {
  let owners = await getOwners()
  let paths = owners.map((owner) => `/${owner.slug}`)
  return {paths, fallback: false}
}

export async function getStaticProps(ctx) {
  let {params} = ctx
  let {owner} = params
  let props = await getOwnerBySlug(owner)
  return {props}
}

export default function Index({img, title, presentation, items, slug}) {

  return (
    <StandardLayout>
      <OwnerContainer 
        title={title} 
        img={img} 
        presentation={presentation}
        />

      <PanelContainer>
        {items.map((element, index) => ( 
          <Item {...element} agencySlug={slug}/>
        ))}
      </PanelContainer>
      
    </StandardLayout>
  );
}
