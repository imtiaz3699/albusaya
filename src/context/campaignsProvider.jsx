'use client'
import React, { createContext, useState, useContext } from 'react';
const CampaignsContext = createContext();
export const useCampaignsContext = () => useContext(CampaignsContext);
export const CampaignsProvider = ({ children }) => {
  const [campaigns, setCampaigns] = useState([]);
  const [isModalOpen,setIsModalOpen] = useState(false)
  const addCampaign = (company) => {
    setCampaigns((prevCompanies) => company);
  };
  const removeCampaign = (companyId) => {
    setCampaigns((prevCompanies) => prevCompanies.filter(company => company.id !== companyId));
  };
  return (
    <CampaignsContext.Provider value={{ campaigns, addCampaign, removeCampaign,isModalOpen,setIsModalOpen }}>
      {children}
    </CampaignsContext.Provider>
  );
};
