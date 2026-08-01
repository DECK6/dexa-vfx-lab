# W4 배치 계획 (41종 · 7배치)

| 배치 | 커널 | 이펙트 |
|---|---|---|
| 4GL1 | webgl | G11 Compression Artifact · G13 Color Bleed · G16 Chromatic Shear · L07 Caustics · L14 Prism Refract · P14 Point Cloud Form |
| 4GL2 | webgl | X07 Page Curl · D07 Mesh Warp · D10 Fisheye · D13 Polar Coord · N12 Erosion Fade · R04 Reaction Diffusion |
| 4GL3 | webgl | R14 Chladni Figure · Q05 Fluid Sim · Q06 Wave Tank · Q07 Oil Slick · A09 Amplitude Warp |
| 4CV1 | canvas | P12 Explosion Debris · P13 Attract Repel · D14 Time Displace · E05 Scan Print · N08 Lightning Storm |
| 4CV2 | canvas | N09 Sand Flow · N11 Crystal Grow · R09 Maze Generate · Q09 Foam Bubble · A08 Frequency Rings |
| 4RX1 | react | T16 Justify Snap · S11 Boolean Merge · S16 Truchet Tile · X10 Morph Cut · C12 Follow Track · V12 Sankey Flow · V13 Tree Expand |
| 4RX2 | react | V14 Timeline Scrub · U10 Chip Filter · U11 Accordion Expand · U12 Drag Sort · M07 Scribble Erase · M10 Follow Mask · A10 Beat Cut |

시뮬레이션형 GL(Q05·R04·Q06 등)은 피드백 버퍼 금지 — 결정적 근사(curl 노이즈·t 진화 패턴)로 구현.
