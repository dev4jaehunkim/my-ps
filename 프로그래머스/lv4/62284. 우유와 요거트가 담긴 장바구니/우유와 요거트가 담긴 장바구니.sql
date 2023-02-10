-- 코드를 입력하세요

-- 추출한 데이터에서 cartid만 추출
select cart_id from (
    -- milk와 yogurt를 갖고 있는 카트 ID만 추출
    select cart_id, name
    from cart_products
    where name in ('Milk', 'Yogurt')
    group by cart_id, name
    
) a
-- 그룹 조건(having 절)을 사용하기 위해 다시 한 번 그루핑
group by cart_id
# cart_id가 2번 나온다면 milk와 yogurt를 둘 다 가지고 있다고 판단할 수 있음
having count(cart_id) >= 2
# 오름차순으로 정렬
order by cart_id;
