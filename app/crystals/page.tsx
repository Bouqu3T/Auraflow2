'use client';

import { useState } from 'react';
import { SearchBar, Empty, Button } from 'antd-mobile';
import { useRouter } from 'next/navigation';
import crystalsData from '../../data/crystals.json';

export default function CrystalsPage() {
  const [searchText, setSearchText] = useState('');
  const router = useRouter();
  
  const filteredCrystals = crystalsData.filter(crystal => 
    crystal.name.toLowerCase().includes(searchText.toLowerCase()) ||
    crystal.color.toLowerCase().includes(searchText.toLowerCase()) ||
    crystal.elements.some(el => el.toLowerCase().includes(searchText.toLowerCase())) ||
    crystal.effects.some(effect => effect.toLowerCase().includes(searchText.toLowerCase()))
  );
  
  return (
    <div className="min-h-screen p-6 pb-20">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-primary">水晶产品种类库</h1>
        <Button 
          size="small" 
          onClick={() => router.back()}
          className="text-accent"
        >
          返回
        </Button>
      </div>
      
      <SearchBar
        placeholder="搜索水晶名称、类型或五行属性"
        value={searchText}
        onChange={setSearchText}
        className="mb-6"
      />
      
      {filteredCrystals.length > 0 ? (
        <div className="space-y-4">
          {filteredCrystals.map((crystal) => (
            <div key={crystal.id} className="card p-4">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-medium text-primary">{crystal.name}</h3>
                <span className="text-sm text-gray-500">{crystal.tier}</span>
              </div>
              <div className="space-y-2">
                <p className="text-sm">
                  <span className="font-medium">类型:</span> {crystal.type} | 
                  <span className="font-medium"> 五行:</span> {crystal.element}
                </p>
                <p className="text-sm">
                  <span className="font-medium">规格:</span> {crystal.size} | 
                  <span className="font-medium"> 颜色:</span> {crystal.color}
                </p>
                <p className="text-sm">
                  <span className="font-medium">价格:</span> {crystal.price.full}
                </p>
                <p className="text-xs text-gray-600 mt-2">
                  <span className="font-medium">核心功用:</span> {crystal.effects}
                </p>
                <p className="text-xs text-gray-600 mt-2">
                  <span className="font-medium">情绪价值:</span> {crystal.emotionalValue}
                </p>
                <p className="text-xs text-gray-600 mt-2">
                  <span className="font-medium">适配客户:</span> {crystal.suitableFor}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Empty description="未找到匹配的水晶" />
      )}
    </div>
  );
}