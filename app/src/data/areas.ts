type Area = {
  id: string              // 識別ID(固有)
  name: string            // 地域名（例：長野県伊那市）
  prefecture: string      // 都道府県
  rentMin: number         // 家賃下限（円）
  rentMax: number         // 家賃上限（円）
  internet: 'fiber' | 'lte' | 'unknown' //ネット状況
  tokyoTime: number       // 東京までの所要時間（分）
  airportMinutes: number | null   // 空港まで（分）
  hospital: boolean               // 総合病院あり？
  snow: boolean                   // 積雪あり？
  populationDensity: 'low' | 'mid' | 'high' // 人口密度
  comment: string                 // 一言コメント
}

export const areas: Area[] = [
  {
    id: 'ina',
    name: '伊那市',
    prefecture: '長野県',
    rentMin: 40000,
    rentMax: 70000,
    internet: 'fiber',
    tokyoTime: 180,
    airportMinutes: 60,
    hospital: true,
    snow: true,
    populationDensity: 'low',
    comment: '自然と生活のバランスが良い'
  },
  {
    id: 'kuzyuukuri',
    name: '九十九里町',
    prefecture: '千葉県',
    rentMin: 40000,
    rentMax: 70000,
    internet: 'fiber',
    tokyoTime: 180,
    airportMinutes: 60,
    hospital: true,
    snow: true,
    populationDensity: 'low',
    comment: '自然と生活のバランスが良い'
  },
  {
    id: 'shioziri',
    name: '塩尻市',
    prefecture: '長野県',
    rentMin: 40000,
    rentMax: 70000,
    internet: 'fiber',
    tokyoTime: 180,
    airportMinutes: 60,
    hospital: true,
    snow: true,
    populationDensity: 'low',
    comment: '自然と生活のバランスが良い'
  },
  {
    id: 'totorishi',
    name: '鳥取市古市',
    prefecture: '鳥取県',
    rentMin: 40000,
    rentMax: 70000,
    internet: 'fiber',
    tokyoTime: 180,
    airportMinutes: 60,
    hospital: true,
    snow: true,
    populationDensity: 'low',
    comment: '自然と生活のバランスが良い'
  },
  {
    id: 'kumamoto',
    name: '熊本市',
    prefecture: '熊本県',
    rentMin: 40000,
    rentMax: 70000,
    internet: 'fiber',
    tokyoTime: 180,
    airportMinutes: 60,
    hospital: true,
    snow: true,
    populationDensity: 'low',
    comment: '自然と生活のバランスが良い'
  },
]
