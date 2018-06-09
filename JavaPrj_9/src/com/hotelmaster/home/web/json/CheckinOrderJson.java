package com.hotelmaster.home.web.json;

import java.util.List;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import com.hotelmaster.po.CheckinItem;
import com.hotelmaster.po.CheckinOrder;
import com.hotelmaster.po.ReservItem;
import com.hotelmaster.po.ReservOrder;

public class CheckinOrderJson {
	private CheckinOrder checkinOrder;
	private ReservOrder reservOrder;
	public CheckinOrderJson(CheckinOrder checkinOrder){
		this.checkinOrder=checkinOrder;
	}
	public CheckinOrderJson(ReservOrder reservOrder){
		this.reservOrder=reservOrder;
	}
	//20
	public JSONObject getJSONObject()throws Exception{
		JSONObject jsonBack=new JSONObject();
		JSONArray jsonItems=new JSONArray();
		JSONObject itemJson=new JSONObject();
		itemJson.put("cioBedRate",checkinOrder.getCioBedRate());
		itemJson.put("cioCause", checkinOrder.getCioCause());
		//
		itemJson.put("cioGroupName", checkinOrder.getCioGroupName());
		itemJson.put("cioGuestCardCatalog",checkinOrder.getCioGuestCardCatalog());
		itemJson.put("cioGuestCardId", checkinOrder.getCioGuestCardId());
		itemJson.put("cioGuestCatalog", checkinOrder.getCioGuestCatalog());
		itemJson.put("cioGuestGender", checkinOrder.getCioGuestGender());
		itemJson.put("cioGuestName", checkinOrder.getCioGuestName());
		itemJson.put("cioGuestType", checkinOrder.getCioGuestType());
		itemJson.put("cioId", checkinOrder.getCioId());
		//
		String cioInDateTime=String.valueOf(checkinOrder.getCioInDateTime());
		String inDateTime=cioInDateTime.substring(0, cioInDateTime.lastIndexOf(":"));
		//String[] inDateTime=cioInDateTime.split("\\.");
		itemJson.put("cioInDateTime", inDateTime);
		
		itemJson.put("cioIsReservId", checkinOrder.getCioIsReservId());
		itemJson.put("cioManNumber",checkinOrder.getCioManNumber());
		itemJson.put("cioOperator",checkinOrder.getCioOperator());
		itemJson.put("cioPaidMoney", checkinOrder.getCioPaidMoney());
		itemJson.put("cioPaymentModel",checkinOrder.getCioPaymentModel());
		//
		String cioPrctOutDateTime=String.valueOf(checkinOrder.getCioPrctOutDateTime());
		//String[] prctOutDateTime=cioPrctOutDateTime.split("\\.");
		String prctOutDateTime=cioPrctOutDateTime.substring(0, cioPrctOutDateTime.lastIndexOf(":"));
		itemJson.put("cioPrctOutDateTime", prctOutDateTime);
		//
		String cioPreOutDateTime=String.valueOf(checkinOrder.getCioPreOutDateTime());
		String preOutDateTime=cioPreOutDateTime.substring(0, cioPreOutDateTime.lastIndexOf(":"));
		itemJson.put("cioPreOutDateTime",preOutDateTime);
		itemJson.put("cioState", checkinOrder.getCioState());
		itemJson.put("cioTotalRate", checkinOrder.getCioTotalRate());
		itemJson.put("cioOrderId",checkinOrder.getCioOrderId());
		//jsonItems.add(itemJson);
		//{"checkinInfo":[{...}]}
		jsonBack.put("data", itemJson);
		
		return jsonBack;
	}
	/**
	 * 
	 * 由预定单信息生成登记单部分信息，其他信息默认
	 *
	 * @return
	 * @throws Exception
	 */
	public JSONObject getReservJSONObject()throws Exception{
		JSONObject jsonBack=new JSONObject();
		JSONArray jsonItems=new JSONArray();
		JSONObject itemJson=new JSONObject();
		itemJson.put("cioBedRate","0");
		itemJson.put("cioCause", "");
		//
		itemJson.put("cioGroupName", "");
		itemJson.put("cioGuestCardCatalog","散客");
		itemJson.put("cioGuestCardId", reservOrder.getRoGuestCardId());
		itemJson.put("cioGuestCatalog", reservOrder.getRoGuestCardCatalog());
		itemJson.put("cioGuestGender", reservOrder.getRoGuestGender());
		itemJson.put("cioGuestName", reservOrder.getRoGuestName());
		itemJson.put("cioGuestType", "普通客人");
		itemJson.put("cioId", "");
		//
		String cioInDateTime=String.valueOf(reservOrder.getRoInDateTime());
		String inDateTime=cioInDateTime.substring(0, cioInDateTime.lastIndexOf(":"));
		//String[] inDateTime=cioInDateTime.split("\\.");
		itemJson.put("cioInDateTime", inDateTime);
		
		itemJson.put("cioIsReservId",reservOrder.getRoId());
		itemJson.put("cioManNumber","2");
		itemJson.put("cioOperator","Admin");
		itemJson.put("cioPaidMoney", reservOrder.getRoPaidMoney());
		itemJson.put("cioPaymentModel",reservOrder.getRoPaymentModel());
		//
		String cioPrctOutDateTime=String.valueOf(reservOrder.getRoPreOutDateTime());
		//String[] prctOutDateTime=cioPrctOutDateTime.split("\\.");
		String prctOutDateTime=cioPrctOutDateTime.substring(0, cioPrctOutDateTime.lastIndexOf(":"));
		itemJson.put("cioPrctOutDateTime", prctOutDateTime);
		//
		String cioPreOutDateTime=String.valueOf(reservOrder.getRoPreOutDateTime());
		String preOutDateTime=cioPreOutDateTime.substring(0, cioPreOutDateTime.lastIndexOf(":"));
		itemJson.put("cioPreOutDateTime",preOutDateTime);
		
		itemJson.put("cioState", "");
		itemJson.put("cioTotalRate", reservOrder.getRoTotalRate());
		itemJson.put("cioOrderId","");
		//jsonItems.add(itemJson);
		//{"checkinInfo":[{...}]}
		jsonBack.put("data", itemJson);
		
		return jsonBack;
	}
	public JSONObject getReservItemJsonObject()throws Exception{
		JSONObject jsonBack=new JSONObject();
		JSONArray jsonItems=new JSONArray();
		JSONObject itemJson=new JSONObject();
		List<ReservItem> reservItemList=reservOrder.getReservItems();
		for(ReservItem item:reservItemList){
			/*,'rmId'
			,{name:'rmPrctPrice',type:'float'}
			,{name:'rmState',type:'int'}
			,'rmCatalog'
			,'rmPrctDiscount'		//Room的预设折扣
			,'rmSetPrctDiscount'	//Room的实际折扣
			,'rmSetPrctPrice'		//Room的实际价格*/
			itemJson.put("rmId", item.getRoom().getRmId());
			itemJson.put("rmPrctPrice", item.getRoom().getRmPrctPrice());
			itemJson.put("rmState", item.getRoom().getRmState());
			itemJson.put("rmCatalog", item.getRoom().getRmCatalog());
			itemJson.put("rmPrctDiscount", item.getRoom().getRmPrctDiscount());
			itemJson.put("rmSetPrctDiscount",item.getRoom().getRmState());
			itemJson.put("rmSetPrctPrice",item.getRoom().getRmPrctPrice());
			jsonItems.add(itemJson);
		}
		jsonBack.put("rooms", jsonItems);
		return jsonBack;
	}
	//
	public JSONObject getItemJsonObject()throws Exception{
		JSONObject jsonBack=new JSONObject();
		JSONArray jsonItems=new JSONArray();
		JSONObject itemJson=new JSONObject();
		List<CheckinItem> checkinItemList=checkinOrder.getCheckinItems();
		for(CheckinItem item:checkinItemList){
			/*,'rmId'
			,{name:'rmPrctPrice',type:'float'}
			,{name:'rmState',type:'int'}
			,'rmCatalog'
			,'rmPrctDiscount'		//Room的预设折扣
			,'rmSetPrctDiscount'	//Room的实际折扣
			,'rmSetPrctPrice'		//Room的实际价格*/
			itemJson.put("rmId", item.getRoom().getRmId());
			itemJson.put("rmPrctPrice", item.getRoom().getRmPrctPrice());
			itemJson.put("rmState", item.getRoom().getRmState());
			itemJson.put("rmCatalog", item.getRoom().getRmCatalog());
			itemJson.put("rmPrctDiscount", item.getRoom().getRmPrctDiscount());
			itemJson.put("rmSetPrctDiscount",item.getCimDiscount());
			itemJson.put("rmSetPrctPrice",item.getCimPrctPrice());
			jsonItems.add(itemJson);
		}
		jsonBack.put("rooms", jsonItems);
		return jsonBack;
	}
	
}
